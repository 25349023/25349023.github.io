let toc = document.getElementById("toc");

window.addEventListener("scroll", function () {
    if (
        document.body.scrollTop > 240 ||
        document.documentElement.scrollTop > 240
    ) {
        toc.classList.remove("hidden");
    } else {
        toc.classList.add("hidden");
    }
});
