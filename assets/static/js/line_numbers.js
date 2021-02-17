function splitCodeTags() {
    let preBlocks = document.querySelectorAll("pre.line-numbers");
    for (let p of preBlocks) {
        let c = p.querySelector("code");
        let clist = c.classList;
        let codeArray = c.innerHTML.split("\n");
        p.removeChild(p.firstChild);

        for (let cstr of codeArray) {
            let ctag = document.createElement("code");
            ctag.innerHTML = cstr;
            ctag.classList = clist;
            p.append(ctag);
        }
    }
}

window.addEventListener("load", splitCodeTags);
