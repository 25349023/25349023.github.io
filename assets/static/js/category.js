let categoryRoot = document.querySelector("#root-collapsible");
let categories = document.querySelectorAll(".collapsible-category");

function collapseExpand(e) {
    let li = this.parentNode;
    let arrow = li.querySelector(":scope > a i");
    let content = li.querySelector(":scope > ul");

    arrow.classList.toggle("opened");
    if (li === categoryRoot) {
        categoryRoot.classList.toggle("expanded");
    }

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }

    for (
        let parent = li;
        parent.id !== "root-collapsible";
        parent = parent.parentNode
    ) {
        if (parent.tagName !== "UL") {
            continue;
        }
        adjustHeight(parent, content.scrollHeight);
    }
}

function adjustHeight(target, amount) {
    target.style.maxHeight = target.scrollHeight + amount + "px";
}

window.addEventListener("load", function() {
    for (let c of categories) {
        let anchor = c.querySelector(":scope > a");
        anchor.addEventListener("click", collapseExpand);
    }
});
