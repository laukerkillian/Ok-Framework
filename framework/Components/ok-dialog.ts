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
    #shadow: ShadowRoot = this.attachShadow({mode: 'closed'});

    constructor(options?: Options) {
        super();
        this.#shadow.append(this.#modal)

        this.#modal.setStyle(new Map([
                [css.property["max-width"], "500px"],
                [css.property["width"], "100%"],
                [css.property["max-height"], "300px"],
                [css.property["height"], "100%"],
                [css.property["display"], "block"],
                [css.property["background"], "white"],
                [css.property["border-radius"], "15px"],
                [css.property["padding"], "20px 20px"]
            ]
        ))
        this.#modal.setHTML(`
        <div class="title">
            <span></span>
        </div>
        `);
        this.setStyle(new Map([
                [css.property["width"], "100%"],
                [css.property["height"], "0"],
                [css.property["display"], "flex"],
                [css.property["position"], "absolute"],
                [css.property["top"], "0px"],
                [css.property["left"], "0px"],
                [css.property["background"], "rgba(0, 0, 0, 0.3)"],
                [css.property["justify-content"], "center"],
                [css.property["align-items"], "center"],
                [css.property["overflow"], "hidden"],
                [css.property["transition"], "all .5s ease-out"]
            ]
        ))
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