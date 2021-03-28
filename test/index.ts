import {Ok, OkImage, OkUrl} from '../framework/Ok';
import {OkTr} from "../framework/Components/ok-tr";

const App = new Ok({

});

customElements.define("ok-tr", OkTr)

async function main() {

    const lang = App.language().getLanguage("navigator");

    await App.translator().setUrl(new OkUrl(`https://raw.githubusercontent.com/laukerkillian/Ok-Framework/main/test/Languages/TR_${lang}.json`));

    setTimeout(async () => {
        console.log("Heyy")
        await App.translator().setUrl(new OkUrl(`https://raw.githubusercontent.com/laukerkillian/Ok-Framework/main/test/Languages/TR_EN.json`));
    }, 5000);
}

App.translator().on("translated", () => {

})

main();