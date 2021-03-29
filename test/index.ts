import {Ok, OkImage, OkUrl} from '../framework/Ok';
import {OkTr} from "../framework/Components/ok-tr";
import {OkWait} from "../framework/OkWait"

const App = new Ok({

});

customElements.define("ok-tr", OkTr)

async function createImg() {
    await OkWait(500);
    const content = await (new OkImage({url: new OkUrl("https://raw.githubusercontent.com/laukerkillian/Ok-Framework/main/framework/assets/icon.png")})).getImage();
    let img = document.createElement("img")
    img.setAttribute("src", content);
    document.body.append(img);
}

async function translate() {
    const lang = App.language().getLanguage();
    await OkWait(500);
    await App.translator().setUrl(new OkUrl(`https://raw.githubusercontent.com/laukerkillian/Ok-Framework/main/test/Languages/TR_${lang}.json`));
}

 function main() {
    createImg();
    translate();
}

App.translator().on("translated", () => {

})


let isPressed: boolean = false;
document.getElementById("coucou").addEventListener("click", async () => {
    if(!isPressed) {
        isPressed = true;
        await OkWait(1000);
        alert("Salut les copains");
        isPressed = false;
    }
})

main();