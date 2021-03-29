import {OkUrl} from "./OkUrl";

interface Options {
    url: OkUrl
}

class OkImage {
    private m_url: OkUrl;

    constructor(options: Options) {
        this.setUrl(options.url);
    }

    public url(): OkUrl {
        return this.m_url
    }

    public setUrl(url: OkUrl): void {
        this.m_url = url;
    }

    public getImage(): Promise<string> {

        return new Promise(async function (resolve: (arg0: string) => void) {
            const data = await (await this.m_url.request()).blob();
            const fileReader = new FileReader();

            fileReader.onload = function(fileLoadedEvent) {
                let srcData = fileLoadedEvent.target.result.toString(); // <--- data: base64
                resolve(srcData);
            }
            fileReader.readAsDataURL(data);
        }.bind(this));
    }
}

export {OkImage, Options}