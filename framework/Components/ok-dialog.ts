import {OkWidget} from "./ok-widget";
import {OkSize} from "../OkSize";

interface Options {
    /**
     * size of the OkDialog
     */
    size?: OkSize | {width?: number, height?: number};
}
class OkDialog extends OkWidget{
    /**
     * m_size contains Dialog size
     * @hidden
     * @private
     */
    private m_size: OkSize = new OkSize({width: 300, height: 200});

    /**
     * OkDialog enable to create a small window inside the navigator's window
     * @param options
     */
    constructor(options?: Options) {
        super();
        if(options?.size) {
            if(options.size instanceof OkSize){
                this.m_size = options.size;
            }else {
                if(options.size?.width) {
                    this.m_size.setWidth(options.size.width);
                }

                if(options.size?.height) {
                    this.m_size.setHeight(options.size.height);
                }
            }
        }
    }

    /**
     * size function return you the current size of the OkDialog
     */
    public size(): OkSize {
        return this.m_size;
    }

    /**
     * setSize function enable you to edit the size of the OkDialog
     * @param size
     */
    setSize(size: OkSize): void {
        this.m_size = size;
    }
}

export {OkDialog, Options}