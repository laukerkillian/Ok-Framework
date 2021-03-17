import "./stylesheet.scss"
import {setApp, currApp} from './global';

interface Options {
    translate?:boolean;
    widget?: HTMLElement;
}

export class Ok {
    private m_translate: boolean = false;
    private m_language: string = navigator.language.toUpperCase() || "EN";
    private m_translateFile: string = "";
    private m_widget: HTMLElement;
    private m_ready: boolean = true;
    private m_translateContent: {[index: string]:any} = {};
    private m_interval: any;

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
    }

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

    public setTranslate(value: boolean): void {
        this.m_translate = value;
    }

    public translate(): boolean {
        return this.m_translate;
    }

    public setLanguage(language: string): void {
        if(language.length == 2) {
            this.m_language = language;
        }
    }

    public language(): string {
        return this.m_language;
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

    public widget(): HTMLElement {
        return this.m_widget;
    }

    public setWidget(widget: HTMLElement): void {
        this.m_widget = widget;
    }

    public setTranslateContent(value: object): void {
        this.m_translateContent = value;
    }

    public translateContent(): {[index: string]:any} {
        return this.m_translateContent;
    }

    public tr(str: string = "", description: string = "") {
        if(this.translate()) {
            if(this.translateContent()[str]){
                return this.translateContent()[str];
            }
            return str;
        }else{
            return str;
        }

    }

    private setReady(value: boolean): void {
        this.m_ready = value;
    }

    private ready(): boolean {
        return this.m_ready;
    }
}