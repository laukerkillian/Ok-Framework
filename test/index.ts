/**
 * Autheur : Killian Kerlau
 * Contexte : ok est un framework, ainsi la classe Ok controle toute l'app et les sous-parties
 * Ok+Img sont des sous classes qui permettent de manipuler l'application facilement
 * Description : Ici nous allons créer une image et l'afficher au bout de 500ms.
 * Mais encore nous allons aussi traduire la page, mais aussi au bout de 500ms
 */

import {Ok, OkArray, OkImage, OkUrl, OkWait, OkTranslatorEvents, OkEvents} from '../framework/Ok';
import {css, OkDialog, OkTr, OkWidget, OkWidgetEvents, OkButton, OkInput} from "../framework/Components/ok-components";
import {OkSize} from "../framework/OkSize";
import {OkColors} from "../framework/OkColors";

console.log(OkColors.transformFromHexToRgba("#3B82F6"))

const App = new Ok({
});


App.on(OkEvents.ready, async () => {

    customElements.define("ok-widget", OkWidget)
    customElements.define("ok-tr", OkTr) // déclaration du composants personnalisé Ok
    customElements.define("ok-dialog", OkDialog)
    customElements.define("ok-button", OkButton)
    customElements.define("ok-input", OkInput)

    App.translator().setUrl(new OkUrl("https://raw.githubusercontent.com/laukerkillian/Ok-Framework/main/test/Languages/TR_FR.json"))

    let button = <OkButton>document.getElementById("button")
    button.on("click", e => {
        let dialog = document.querySelector<OkDialog>("ok-dialog");
        dialog.show();
    })
})

App.translator().on(OkTranslatorEvents.translated, () => { // lorsqu'on reçois l'event translated
    //console.log("translated")
})