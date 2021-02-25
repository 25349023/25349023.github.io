function splitCodeTags() {
    let preBlocks = document.querySelectorAll("pre.line-numbers");
    for (let p of preBlocks) {
        let c = p.querySelector("code");
        let linesCount = c.textContent.split("\n").length;

        let numbers = document.createElement("div");
        numbers.classList.add("number-list");
        for (let i = 0; i < linesCount; i++) {
            numbers.append(document.createElement("span"));
        }
        p.append(numbers);
    }
}

window.addEventListener("load", splitCodeTags);
