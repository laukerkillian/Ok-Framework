import {OkUrl} from "./OkUrl";
import {OkLanguage} from "./OkLanguage";
import {OkEventsEmitter} from "./OkEventsEmitter";

interface Options {
    url?: OkUrl
}

enum Events {
    /**
     * When Translated file is loaded
     */
    translated= "translated",
}

class OkTranslator extends OkEventsEmitter {
    private m_url: OkUrl = new OkUrl("");
    private m_content: {[index: string]:any} = {};

    constructor(options?: Options) {
        super();
        this.registerEvents();

        if(options?.url) {
            this.setUrl(options.url);
        }
    }

    public translate(keyword: string): string {
        if(this.m_content[keyword]) {
            return this.m_content[keyword];
        }
        return keyword;
    }

    public url(): OkUrl {
        return this.m_url
    }

    public async setUrl(url: OkUrl): Promise<void> {
        if(await url.exist()) {
            this.m_url = url;
            const content = await (await this.m_url.request()).json()
            this.m_content = content;
            this.emit(Events.translated, {});
        }else {
            throw "Url not found";
        }
    }

    private registerEvents(): void {
        this.on(Events.translated, () => {})
    }
}

export {OkTranslator, Options, Events};