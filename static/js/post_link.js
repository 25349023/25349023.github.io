let articles = document.querySelectorAll("article");

function linkToPost() {
    window.location.href = this.dataset.href;
}

window.addEventListener("load", function() {
    for (let post of articles) {
        post.addEventListener("click", linkToPost);
    }
});
