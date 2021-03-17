import { Ok } from '../framework/Ok';
import "./stylesheets/stylesheet.scss"
import {SecondTimer} from '../framework/Components/second-timer';
import {OkTr} from "../framework/Components/ok-tr";

const myApp = new Ok({
    translate: true,
    widget: document.getElementById("App")
});

myApp.setTranslateFile("https://raw.githubusercontent.com/laukerkillian/Ok-Framework/main/test/Languages/TR_" + myApp.language() + ".json");

myApp.on('ready', (arg?: any) => {

    customElements.define("second-timer", SecondTimer)
    customElements.define("ok-tr", OkTr)
    let allEl = document.querySelectorAll("*");
    for( let el of allEl){
        let attrs: Array<string> = el.getAttributeNames();

        for (let attrName of attrs) {
            let attrValue = el.getAttribute(attrName);

            if(attrValue.match(/^oktr\(.*\)$/)){

                let val = attrValue.slice(5, (attrValue.length-1));
                let newVal = myApp.tr(val);
                el.setAttribute(attrName,newVal);
            }
        }
    }
});