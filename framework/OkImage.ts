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

    public async getImage(): Promise<string> {
        const data = await (await this.m_url.request()).blob();
        return new Promise(function (resolve, reject) {

            const fileReader = new FileReader();

            fileReader.onload = function(fileLoadedEvent) {
                let srcData = fileLoadedEvent.target.result.toString(); // <--- data: base64
                resolve(srcData);
            }
            fileReader.readAsDataURL(data);
        });
    }
}

export {OkImage, Options}