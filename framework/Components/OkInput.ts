import {OkWidget} from "./ok-widget";

class OkInput extends OkWidget {

    #editable: boolean = true;

    constructor() {
        super();
        this.applyCustomAttrs();
    }

    protected applyCustomAttrs(): void {
        this.setAttribute("contentEditable", "")
        this.on("HTMLContentChange", ([{type, attributeName}]) => {
            if(type === "attributes") {
                if(attributeName === "enable") {
                    this.#editable = this.getAttribute("enable") !== "false";
                }
                if(this.#editable) {
                    if(this.getAttribute("contentEditable") !== "") {
                        this.setAttribute("contentEditable", "")
                    }
                }else{
                    this.removeAttribute("contentEditable");
                }
            }
        })
    }
}

export {OkInput}