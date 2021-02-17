function trimCodeBlocks() {
    let codes = document.querySelectorAll(".post-content pre code");
    for (let code of codes) {
        // console.log(code);
        let content = code.innerHTML;
        if (content.endsWith('\n')) {
            code.innerHTML = content.substring(0, content.length - 1);
        }
    }
}

window.addEventListener('load', trimCodeBlocks);