import {OkImage, Options as OkImageOptions} from './OkImage'
import {Events as OkTranslatorEvents, OkTranslator} from "./OkTranslator";
import {OkLanguage, Options as OkLanguageOptions} from "./OkLanguage";
import {setApp, currApp} from "./private/global";
import {OkUrl} from "./OkUrl";
import {OkEventsEmitter} from "./OkEventsEmitter";
import {OkWait} from "../framework/OkWait"
import {OkUnit} from "./OkUnit";
import {OkSize, Options as OkSizeOptions} from "./OkSize";
import {OkArray} from "../framework/OkArray";
import {OkWidget} from "./Components/ok-widget";
import {OkTr} from "./Components/ok-tr";
import {OkDialog} from "./Components/ok-dialog";
import "./stylesheet.scss"

window.Array.prototype.toOkArray = function() {
    return new OkArray(...this)
}

interface Options {
    title?: string;
    icon?: OkImage;
    urlTranslator?: OkUrl
}

enum Events {
    ready= "ready"
}

class Ok extends OkEventsEmitter {
    private m_icon: OkImage = new OkImage({url: new OkUrl("")});
    private m_translator: OkTranslator = new OkTranslator();
    private m_language: OkLanguage = new OkLanguage();

    constructor(options?: Options) {
        super()
        setApp(this);
        this.setConfiguration(options).then(() => {});
        this.registerEvents();
        this.init()
    }

    public init() {
        window.addEventListener("DOMContentLoaded", () => {
            this.emit(Events.ready, {})
        })
    }

    public async setConfiguration(options: Options): Promise<void> {
        if(options.urlTranslator) {
            await this.m_translator.setUrl(options.urlTranslator);
        }
        if(options.title) {
            this.setTitle(options.title)
        }
    }

    public title(): string {
        return document.title;
    }

    public setTitle(title: string): void {
        document.title = title;
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

    // rewrite

    public on(event: Events | string, listener: (attr?:any) => any): void {
        if(event in Events) {
            super.on(event, listener);
        }else{
            throw new Error("The event send doesn't exist on this object!")
        }
    }

    private registerEvents(): void {
        this.on(Events.ready, () => {})
    }
}

export {Ok, Options as OkOptions, OkImage, OkImageOptions, OkUrl, currApp, OkEventsEmitter, OkWait, OkUnit, OkSize, OkSizeOptions, OkArray, OkTranslatorEvents, Events as OkEvents};