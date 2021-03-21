import {Ok} from "../Ok";
import {OkMenuBar} from "./OkMenuBar";

interface Options {
    parent?: OkWidget
};

export class OkWidget extends HTMLElement {
    private m_menuBar: OkMenuBar;

    constructor() {
        super();
    }

    public menuBar(): OkMenuBar {
        return this.m_menuBar;
    }

    public setMenuBar(menuBar: OkMenuBar): void {
        this.m_menuBar = menuBar;
    }
}