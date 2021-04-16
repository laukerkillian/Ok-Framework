/**
 * This is a complex function which should only use to has multiple extends and now the super parameters only accept Map.
 *
 * ```ts
 * class Obj {
 *     constructor(title: string) {
 *         console.log(title)
 *     }
 * }
 * class Obj2 {
 *     constructor(obj: {title: string}) {
 *         console.log(obj.title)
 *     }
 * }
 * class Obj3 {
 *     constructor(title: string, age: number) {
 *         console.log(title)
 *         console.log(age)
 *     }
 * }
 * class Obj4 extends OkMultipleExtends(Obj, Obj2, Obj3) {
 *
 *      constructor() {
 *          super(new Map([
 *              ["Obj", ["Salut"]],
 *              ["Obj2", [{title: "Hey Mama"}]],
 *              ["Obj3", ["Mhhhh", 16]]
 *          ]));
 *     }
 * }
 * let obj = new Obj4();
 * ```
 *
 * @param baseClass
 * @param mixins
 * @constructor
 */

function OkMultipleExtends(baseClass: any, ...mixins: any[]): any {
    class base extends baseClass {
        constructor (args: Map<string, any[]>) {
            let proxyHandler: ProxyHandler<Map<string, any[]>> = {
                get: function(obj, prop) {
                    // On obtient le nombre de produits
                    // un alias pour products.length
                    let résultat;
                    for (let produit of obj) {
                        if (produit[0] === prop) {
                            résultat = produit;
                        }
                    }

                    if (résultat) {
                        return résultat;
                    }
                    return undefined;
                }
            };
            let argsT: {[index:string] : any} = new Proxy(args, proxyHandler);
            if(argsT[baseClass.name]) {
                super(...argsT[baseClass.name][1])
            }else{
                super();
            }
            for(const mixin of mixins) {
                if(mixin) {
                    if(argsT[mixin.name]) {
                        copyProps(this, (new mixin(...argsT[mixin.name][1])))
                    }else{
                        copyProps(this, (new mixin));
                    }
                }
            }

        }
    }
    let copyProps = (target: any, source: any) => {  // this function copies all properties and symbols, filtering out some special ones
        let props: string[] = Object.getOwnPropertyNames(source);
        for(const prop of props) {
            if (!prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
        }
        let symbols: symbol[] = Object.getOwnPropertySymbols(source);
        for(const symbol of symbols) {
            Object.defineProperty(target, symbol, Object.getOwnPropertyDescriptor(source, symbol));
        }
    }
    mixins.forEach((mixin) => { // outside contructor() to allow aggregation(A,B,C).staticFunction() to be called etc.
        copyProps(base.prototype, mixin.prototype);
        copyProps(base, mixin);
    });
    return base;
}

export {OkMultipleExtends}