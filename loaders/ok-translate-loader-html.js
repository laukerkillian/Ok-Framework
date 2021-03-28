const { getOptions } = require("loader-utils");
const { JSDOM } = require("jsdom");
const fs = require("fs");

module.exports = function (content, map, meta) {
    const options = getOptions(this);
    const dom = new JSDOM(content);
    const common_balise = options?.tagTranslate?.toUpperCase() || "OK-TR";

    let translateString = [
    ];
    let str = [];

    dom.window.document.querySelectorAll("*").forEach((el) => {
        if(el.tagName === common_balise) {
            if(str.indexOf(el.tagName) === -1) {
                str.push(el.innerHTML);
                translateString.push({
                    str: el.innerHTML,
                    description: el?.getAttribute("description") || ""
                })
            }

        }
    })

    console.log(translateString)

    return ""
}