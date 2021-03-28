import {Ok} from '../Ok';
import {currApp} from '../private/global';

export class OkTr extends HTMLElement {
    private App: Ok;
    private m_text: string;
    constructor() {
        super();
        this.App = currApp();
    }

    connectedCallback() {
        let el = this;
        this.m_text = this.innerText;
        this.App.translator().on("translated", () => {
            el.innerText = this.App.translator().translate(this.m_text);
        })
    }
}