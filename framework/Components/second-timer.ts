import { Ok } from '../Ok';
import {currApp} from '../private/global';

export class SecondTimer extends HTMLElement {
    private myApp: Ok;
    constructor() {
        super();
        this.myApp = currApp();
        console.log(currApp())
    }

    connectedCallback() {
        let btn = document.createElement("button");

        btn.innerText = this.myApp.tr("add", "Petit description");

        let number = 0;
        let counter = document.createElement("div");
        counter.innerText = `Compteur : ${number.toString()}`;

        btn.addEventListener('click', () => {
            number += 1;
            counter.innerText = `Compteur : ${number.toString()}`;
        })

        this.appendChild(btn);
        this.appendChild(counter);
    }
}