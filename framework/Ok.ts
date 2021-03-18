import "./stylesheet.scss"
import {setApp, currApp} from './global';

interface Options {
    translate?:boolean;
    widget?: HTMLElement;
    icon?: string;
    title?: string;
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
        if(options?.title) {
            this.setTitle(options.title);
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
        fetch(translateFile).then(res => {
            if(res.ok) {
                this.m_translateFile = translateFile;
                let App = this;
                res.text().then(function (text) {
                    App.setTranslateContent(JSON.parse(text));
                    App.setReady(true);
                });
            }else{
                throw Error("The translate file wasn't found!");
            }
        });
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
        return document.head.querySelector("link[rel='shorcut icon']").getAttribute('href');
    }

    public setIcon(icon: string): void {
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