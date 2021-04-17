import {OkWidget} from "./ok-widget";
import {css} from "../css";
import {OkSize} from "../OkSize";
import {OkUnit} from "../OkUnit";

interface Options {

}
class OkDialog extends OkWidget{

    /**
     * OkDialog enable to create a small window inside the navigator's window
     * @param options
     */

    #modal: OkWidget = new OkWidget();

    constructor(options?: Options) {
        super();
        this.append(this.#modal)

        this.#modal.setHTML(`
            <h3 class="title">Payment successful</h3>
            <ok-button>Salut !</ok-button>
        `);
    }

    protected calledByConnectedCallback() {

    }

    public show(): void {
        this.setStyleProperty(css.property["height"], "100%");
    }

    public size(): OkSize {
        let sizeRect = this.#modal.getClientRects()[0];
        return new OkSize({
            width: sizeRect.width,
            height: sizeRect.height
        })
    }

    public setSize(size: OkSize | {width?: number, height?: number}): void {
        let sizeOkType: OkSize;
        if(!(size instanceof OkSize)) {
            sizeOkType = new OkSize({
                width: size.width,
                height: size.height
            });
        }else{
            sizeOkType = size;
        }

        this.#modal.setStyleProperty(css.property["width"], OkUnit(sizeOkType.width(), "px"));
        this.#modal.setStyleProperty(css.property["height"], OkUnit(sizeOkType.height(), "px"));
    }
}

export {OkDialog, Options}