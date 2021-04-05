/**
 * Autheur : Killian Kerlau
 * Contexte : ok est un framework, ainsi la classe Ok controle toute l'app et les sous-parties
 * Ok+Img sont des sous classes qui permettent de manipuler l'application facilement
 * Description : Ici nous allons créer une image et l'afficher au bout de 500ms.
 * Mais encore nous allons aussi traduire la page, mais aussi au bout de 500ms
 */

import {Ok, OkImage, OkUrl, OkWait} from '../framework/Ok';
import {OkTr, OkDialog} from "../framework/Components/ok-components";
import {OkSize} from "../framework/OkSize";

const App = new Ok({ // déclaration de mon application Ok

});

customElements.define("ok-tr", OkTr) // déclaration du composants personnalisé Ok
customElements.define("ok-dialog", OkDialog)

async function createImg() { // créer et importe une image au bout de 500 ms
    await OkWait(500); // attrendre 500 ms
    const content = await (new OkImage({url: new OkUrl("https://raw.githubusercontent.com/laukerkillian/Ok-Framework/main/framework/assets/icon.png")})).getImage();
    // récupère le contenue d'une image :
    // D'abord on déclare une classe image qui a besoin d'un url qui doit être une instance de OkUrl.
    // Puis on utilises la méthode getImage qui retourne une promesse du contenue en base64 de l'image
    let img = document.createElement("img") // créer une image
    img.setAttribute("src", content); // dit que la source est le contenue en base64 de l'image
    document.body.append(img); // importe l'élément sur le corps de la page
}

async function translate() { // traduit la page au bout de 500 ms
    const lang = App.language().getLanguage(); // récupère la langue de l'utilisateur, étant donné que nous avons pas mis une priorité
    // cela va choisir par défaut le langage du navigateur
    await OkWait(500); // attendre 500 ms
    await App.translator().setUrl(new OkUrl(`https://raw.githubusercontent.com/laukerkillian/Ok-Framework/main/test/Languages/TR_${lang}.json`));
    // dans le traducteur incorporé dans l'instance App, on précise l'url qu'il doit adopté
}

 function main() {
    createImg(); // appele la fonction précédemment définis ( créer et importe une image sur le dom )
    translate(); // appele la fonction précédemment définis  ( traduit la page )
}

App.translator().on("translated", () => { // lorsqu'on reçois l'event translated

})


let isPressed: boolean = false;
document.getElementById("coucou").addEventListener("click", async () => {
    // si le button n'a pas été précé il y a moins de 1s, attends une seconde et affiche salut les copains
    if(!isPressed) { // vérifie que le button n'a pas été précé depuis 1s
        isPressed = true; // dit que le button à été précé, il y a moins 1s
        await OkWait(1000); // attends 1s ou 1000ms
        //alert("Salut les copains"); // affiche "Salut les copains"x
        isPressed = false; // dit que le button n'a pas été précé depuis 1s
    }
})

let dialog = new OkDialog({});
document.body.append(dialog)

main(); // appel la fonction principale