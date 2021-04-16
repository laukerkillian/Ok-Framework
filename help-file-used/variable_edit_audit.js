function getObservableVar() {
    let obj = {
        variable: undefined
    }
    let p = new Proxy(obj, {
        set(target, props, value, receiver) {
            console.log("Heyhey")
            target[props] = value;
        }
    });
    return p
}

let Obj = getObservableVar()
Obj.variable = 25;