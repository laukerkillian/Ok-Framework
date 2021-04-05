import {Ok} from '../Ok';
import {currApp} from '../private/global';
import {OkWidget} from "./ok-widget";

class OkTr extends OkWidget {
    /**
     * current app
     * @hidden
     * @private
     */
    private App: Ok;
    /**
     * default text defined in <ok-tr>TEXT</ok-tr>
     * @hidden
     * @private
     */
    private m_text: string;

    /**
     * Translate the text defined in <ok-tr>TEXT</ok-tr>
     * @category Components
     */
    constructor() {
        super();
        this.App = currApp();
    }

    /**
     * @private
     * @hidden
     */
    private connectedCallback() {
        let el = this;
        this.m_text = this.innerText;
        this.App.translator().on("translated", () => {
            el.innerText = this.App.translator().translate(this.m_text);
        })
    }
}

export {OkTr}