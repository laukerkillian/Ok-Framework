/*
 * Author : KILLIAN KERLAU
 * Title : OkRequest
 * Description : OkRequest is a function to make http request
 */

import {OkEventsEmitter} from "./OkEventsEmitter";
import {OkUrl, OkUrlClass} from "./OkUrl";

export enum HttpMethod {
    /**
     * The GET method is used to retrieve information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data.
     */
    GET = "GET",
    /**
     * A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.
     */
    POST ="POST",
    /**
     * Same as GET, but transfers the status line and header section only.
     */
    HEAD ="HEAD",
    /**
     * Replaces all current representations of the target resource with the uploaded content.
     */
    PUT ="PUT",
    /**
     * Removes all current representations of the target resource given by a URI.
     */
    DELETE = "DELETE",
    /**
     * Establishes a tunnel to the server identified by a given URI.
     */
    CONNECT = "CONNECT",
    /**
     * Describes the communication options for the target resource.
     */
    OPTIONS = "OPTIONS",
    /**
     * Performs a message loop-back test along the path to the target resource.
     */
    TRACE = "TRACE"
}

export interface OptionsXML {
    /**
     * method : get, post, ...
     */
    method?: HttpMethod,
    /**
     * async run as async or sync
     */
    async?: boolean
}

export interface Options {
    /**
     * url to the document
     */
    url: OkUrlClass;
    /**
     * OptionsXML : method, async
     */
    options?:OptionsXML;
    /**
     * callback
     * @param arg
     */
    callback?: (arg?:Response) => any
}

export interface Response {
    /**
     * Response type
     */
    response: string;
    /**
     * response text
     */
    text: string;
    /**
     * response statue
     */
    status: number;
    /**
     * response url
     */
    responseUrl: OkUrlClass;
}

export enum Events {
    /**
     * When OkRequest is loaded
     */
    Loaded= "Loaded",
    /**
     * during loading
     */
    Loading="Loading",
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

    private m_method: HttpMethod;
    private m_async: boolean = true;
    private m_options: Options;

    /**
     * This class contains all you need to made http request easily and quickly
     * @param options
     */
    constructor(options: Options) {
        super();
        this.registerEvents();


        this.m_method = options?.options?.method || HttpMethod.GET;
        this.m_async = options?.options?.async || true;
        this.m_options = options;

        if(options.callback) {
            this.on(Events.Loaded, options.callback);
        }

        this.makeHttp();

    }

    /**
     * This method make the http request
     * @private
     * @hidden
     */
    private makeHttp(): void {
        const request = new XMLHttpRequest();
        request.open(this.m_method, this.m_options.url.url(), this.m_async);

        request.addEventListener("load", () => {
            if (request.readyState === request.DONE) {

                this.emit(Events.Loaded, {
                    response: request.response,
                    text: request.responseText,
                    status: request.status,
                    responseURL: OkUrl(request.responseURL)
                })
            }
        })

        request.send();
    }

    /**
     * This method register default events
     * @private
     * @hidden
     */
    private registerEvents(): void {
        this.on(Events.Loaded, () => {})
        this.on(Events.Loading, () => {})
    }
}