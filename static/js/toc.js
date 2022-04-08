let toc = document.getElementById("toc");

window.addEventListener("scroll", function () {
    let body = document.body,
    html = document.documentElement;

    let height = Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

    if (document.body.scrollTop > height - 1200 ||
        document.documentElement.scrollTop > height - 1200) {
        toc.classList.add("hidden");
    }
    else if (
        document.body.scrollTop > 480 ||
        document.documentElement.scrollTop > 480
    ) {
        toc.classList.remove("hidden");
    } else {
        toc.classList.add("hidden");
    }
});
