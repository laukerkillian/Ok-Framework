import { Ok } from '../Ok';
import {currApp} from '../global';

export class OkTr extends HTMLElement {
    private myApp: Ok;
    constructor() {
        super();
        this.myApp = currApp();
    }

    connectedCallback() {
        let val = this.innerText;
        let el = this;
        this.myApp.on('ready', () => {
            let newVal = this.myApp.tr(val);
            el.innerText = newVal;
            el.setAttribute("old", val);
        });
    }
}