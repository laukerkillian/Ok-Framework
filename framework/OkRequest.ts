/*
 * Author : KILLIAN KERLAU
 * Title : OkRequest
 * Description : OkRequest is a function to make http request
 */

import {OkEventsEmitter} from "./OkEventsEmitter";

interface OptionsXML {
    method?: string,
    async?: boolean
}

interface Options {
    url: string;
    options?:OptionsXML;
    callback?: (arg?:any) => any
    catch?: (arg?:any) => any
}

/**
 * this method made and return OkRequestClass
 * @param options
 * @constructor
 */
export function OkRequest(options: Options): OkRequestClass
{
    return new OkRequestClass(options);
}

export class OkRequestClass extends OkEventsEmitter {

    private m_method: string;
    private m_async: boolean = true;
    private m_options: Options;

    /**
     * This class contains all you need to made http request easily and quickly
     * @param options
     */
    constructor(options: Options) {
        super();
        this.registerEvents();


        this.m_method = options.options.method || "get";
        this.m_async = options.options.async || true;
        this.m_options = options;

        this.makeHttp();

    }

    /**
     * This method make the http request
     * @private
     */
    private makeHttp(): void {
        const request = new XMLHttpRequest();
        request.open(this.m_method, this.m_options.url, this.m_async);
        request.send();
    }

    /**
     * This method register default events
     * @private
     */
    private registerEvents(): void {
        this.on("loaded", () => {})
        this.on("loading", () => {})
    }
}