import {Ok} from "./Ok";

class OkArray extends Array<any> {
    constructor(...args: any[]) {
        super(args);
    }

    public inArray(item: any):boolean {
        if(this.indexOf(item) > -1) {
            return true;
        }
        return false
    }
}

Array.prototype.toOkArray = function(): OkArray {
    return new OkArray(...this);
}

export {OkArray}