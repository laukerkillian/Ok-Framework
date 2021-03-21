import {currApp} from './private/global';

export function OkTrAttrs() {
    let myApp = currApp();
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
}