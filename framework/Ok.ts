import {OkImage} from './OkImage'
import {OkTranslator} from "./OkTranslator";
import {OkLanguage, Options as OkLanguageOptions} from "./OkLanguage";
import {setApp, currApp} from "./private/global";
import {OkUrl} from "./OkUrl";
import {OkEventsEmitter} from "./OkEventsEmitter";
import {OkWait} from "../framework/OkWait"

interface Options {
    title?: string;
    icon?: OkImage;
    urlTranslator?: OkUrl
}

class Ok {
    private m_title: string = "";
    private m_icon: OkImage = new OkImage({url: new OkUrl("")});
    private m_translator: OkTranslator = new OkTranslator();
    private m_language: OkLanguage = new OkLanguage();

    constructor(options?: Options) {
        setApp(this);
        this.setConfiguration(options);
    }

    public setConfiguration(options: Options): void {
        if(options.urlTranslator) {
            this.m_translator.setUrl(options.urlTranslator);
        }
    }

    public title(): string {
        return this.m_title;
    }

    public setTitle(title: string): void {
        this.m_title = title;
    }

    public icon(): OkImage {
        return this.m_icon;
    }

    public setIcon(icon: OkImage): void {
        const content = icon.getImage();

        this.m_icon = icon;
    }

    public translator(): OkTranslator {
        return this.m_translator;
    }

    public language(): OkLanguage {
        return this.m_language;
    }
}

export {Ok, Options as OkOptions, OkImage, OkUrl, currApp, OkEventsEmitter, OkWait};