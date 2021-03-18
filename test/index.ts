import { Ok } from '../framework/Ok';
import "./stylesheets/stylesheet.scss"
import {SecondTimer} from '../framework/Components/second-timer';
import {OkTr} from "../framework/Components/ok-tr";
import {OkTrAttrs} from "../framework/Ok-tr-attribute"

const myApp = new Ok({
    translate: true,
    widget: document.getElementById("App"),
    charset: "UTF-8",
    title: "Test OK framework"
});

myApp.setTranslateFile("https://raw.githubusercontent.com/laukerkillian/Ok-Framework/main/test/Languages/TR_" + myApp.language() + ".json");

myApp.on('ready', (arg?: any) => {

    customElements.define("second-timer", SecondTimer)
    customElements.define("ok-tr", OkTr)
    OkTrAttrs();

});