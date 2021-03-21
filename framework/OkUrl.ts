import {OkRequest} from "./OkRequest";
import {OkEventsEmitter} from "./OkEventsEmitter";

export class OkUrlClass extends OkEventsEmitter {
    /**
     * @hidden
     * @private
     */
    private m_url: string = "";

    /**
     * create Url from string
     * @param url
     */
    constructor(url: string) {
        super();
        this.setUrl(url);
    }

    /**
     * return if file exist or not
     * @param callback
     */
    public exist(callback: (arg?:boolean)=>any) {
        OkRequest({
            url: this,
            callback: (res) => {
                callback(res.status == 200)
            }
        })
    }

    /**
     * return url as string
     */
    public url(): string {
        return this.m_url;
    }

    /**
     * set url as string
     * @param url
     */
    public setUrl(url: string): void {
        this.m_url = url;
    }
}

/**
 * create and return a OkUrlClass
 * @param url
 */
export function OkUrl(url: string): OkUrlClass {
    return new OkUrlClass(url);
}