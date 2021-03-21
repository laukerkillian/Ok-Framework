/*
 * Author : KILLIAN KERLAU
 * Title : Ok
 * Description : Ok is class which contains all of your app
 */


import "./stylesheet.scss"
import {setApp, currApp} from './private/global';
import {OkRequest} from "./OkRequest";
import {OkUrl} from "./OkUrl";

interface Options {
    translate?:boolean;
    widget?: HTMLElement;
    icon?: string;
    title?: string;
    charset?:string;
}

export class Ok {
    private m_translate: boolean = false;
    private m_language: string = navigator.language.toUpperCase() || "EN";
    private m_translateFile: string = "";
    private m_widget: HTMLElement;
    private m_ready: boolean = true;
    private m_translateContent: {[index: string]:any} = {};
    private m_interval: any;
    private m_icon: string;
    private m_charset: string;

    constructor(options: Options) {
        setApp(this);
        if(options.translate) {
            this.setTranslate(options.translate);
            this.m_ready = false;
        }
        if(options?.widget){
            if(options.widget !== null) {
                this.setWidget(options.widget);
            }else {
                throw Error("Widget sent wasn't found ( widget == null )");
            }
        }
        if(options?.icon) {
            this.setIcon(options.icon);
        }else{
            this.setIcon("https://raw.githubusercontent.com/laukerkillian/Ok-Framework/main/framework/assets/icon.png");
        }
        if(options?.title) {
            this.setTitle(options.title);
        }
        if(options?.charset) {
            this.setCharset(options.charset);
        }


        if(!document.querySelector("meta[name='viewport']")) {
            let metaViewportEl = document.createElement("meta");
            metaViewportEl.setAttribute("name", "viewport");
            metaViewportEl.setAttribute("content", "width=device-width, initial-scale=1")
            document.head.appendChild(metaViewportEl);
        }
    }

    // EVENT

    public on(event: string, callback: (arg?:any) => any): void {
        switch (event) {
            case 'ready':
                if(this.ready()) {
                    callback();
                    if(this.m_interval){
                        clearInterval(this.m_interval);
                        this.m_interval = undefined;
                    }
                }else{
                    if(!this.m_interval) {
                        this.m_interval = setInterval(() => this.on('ready', callback), 100);
                    }
                }

                break;
            default:
                throw Error('An unknown event was sent.');
        }
    }

    public charset(): string {
        return this.m_charset;
    }

    public setCharset(charset: string): void {
        let charsetEl = document.querySelector("meta[charset]");
        this.m_charset = charset.toUpperCase();
        if( !charsetEl ) { // si la balise meta pour définir le charset n'existe pas on la créer
            charsetEl = document.createElement("meta");
            document.head.appendChild(charsetEl);
        }
        charsetEl.setAttribute("charset", this.m_charset); // on lui mets la nouvelle valeur du charset

    }

    // translate system

    public translate(): boolean {
        return this.m_translate;
    }

    public setTranslate(value: boolean): void {
        this.m_translate = value;
    }

    public translateFile(): string {
        return this.m_translateFile;
    }

    public setTranslateFile(translateFile: string): void {
        this.setReady(false);
        OkRequest({
            url: OkUrl(translateFile),
            callback: (res) => {
                if(res.status === 200) {

                    this.m_translateFile = translateFile;
                    this.setTranslateContent(JSON.parse(res.text));
                    this.setReady(true);
                }else{
                    throw Error("The translate file wasn't found!");
                }
            }
        })
    }

    public translateContent(): {[index: string]:any} {
        return this.m_translateContent;
    }

    public setTranslateContent(value: object): void {
        this.m_translateContent = value;
    }

    public tr(str: string = "", description: string = ""): string {
        if(this.translate()) {
            if(this.translateContent()[str]){
                return this.translateContent()[str];
            }
            return str;
        }else{
            return str;
        }

    }

    // language

    public setLanguage(language: string): void {
        if(language.length == 2) {
            this.m_language = language;
        }
    }

    public language(): string {
        return this.m_language;
    }

    // widget management

    public widget(): HTMLElement {
        return this.m_widget;
    }

    public setWidget(widget: HTMLElement): void {
        this.m_widget = widget;
    }

    // website icon

    public icon(): string {
        return this.m_icon;
    }

    public setIcon(icon: string): void {
        fetch(icon).then((res) => {
            if(res.ok) {
                let App = this;
                let iconEl = document.querySelector("link[rel='icon']");
                if(!iconEl) {
                    iconEl = document.createElement("link");
                    iconEl.setAttribute("rel","icon");
                    document.head.appendChild(iconEl);
                }
                if(icon.match(/\.png$/)) {
                    iconEl.setAttribute("type", "image/png")
                }else {
                    iconEl.setAttribute("type", "")
                }
                iconEl.setAttribute("href", icon);
            }else{
                throw Error("The icon file wasn't found!");
            }
        })
        this.m_icon = icon;
    }

    // website title

    public title(): string {
        return document.title;
    }

    public setTitle(title: string): void {
        document.title = title;
    }

    // private for events

    private ready(): boolean {
        return this.m_ready;
    }

    private setReady(value: boolean): void {
        this.m_ready = value;
    }
}