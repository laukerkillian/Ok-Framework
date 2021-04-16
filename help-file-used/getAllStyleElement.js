let val = ``;
for (const [key, value] of Object.entries(document.querySelector("p").style)) {
    if(/[0-9]+/gm.test(key)){
        continue;
    }else if(/[A-Z]+/gm.test(key)){
        const found = key.match(/[A-Z]/gm);
        let newKey = key;

        for(const majLetter of found){
            newKey = newKey.replace(majLetter, "-" + majLetter.toLowerCase());
        }
        let valComment = await requestKey(newKey);
        val += `
        \/**
          * ${valComment}
          *\/
        "${newKey}"= "${newKey}",\n`
    }else{
        let valComment = await requestKey(key);
        val += `
        \/**
          * ${valComment}
          *\/
        ${key}= "${key}",\n`
    }
}
async function requestKey(key) {
    if(/[webkit]-/.test(key)) {
        let newKey = key.replace("webkit-", "-webkit-")
        let request = await test(newKey);
        if(request.ok) {
            return final(request)
        }
        newKey = key.replace("webkit-", "")
        request = await test(newKey);
        if(request.ok) {
            return final(request)
        }
    }else {
        let request = await test(key);
        if(request.ok) {
            return final(request)
        }
    }
    return ""
}

function getHtml(htmlDoc) {
    for(const p of htmlDoc.querySelectorAll("p")){
        if(!p.parentNode.classList.contains("notecard")){
            if(p.innerText && p.innerText !== "« SVG Attribute reference home"){
                return p.innerText;
            }
        }
    }
    return "";
}

async function final(res) {
    const resText = await res.text();
    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(resText, 'text/html');
    var doc = getHtml(htmlDoc);
    var text = espaceHTML(doc);
    var key = /[^/]*$/.exec(res.url)[0];
    return `
    ${text}\n
    refer to : ${res.url} \\
    available values : https://cssvalues.com/?view=${key}
    `;
}
console.log(val);

function espaceHTML(data) {
    var div = document.createElement('div');
    var text = document.createTextNode(data);
    div.appendChild(text);
    let newText = div.innerHTML;
    div.remove();
    return newText;
}

async function test(key) {
    let res = await fetch("https://developer.mozilla.org/en-US/docs/Web/CSS/" + key)
    if(res.ok) {
        return res;
    }
    res = await fetch("https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/" + key);
    if(res.ok) {
        return res;
    }
    return {ok: false}
}