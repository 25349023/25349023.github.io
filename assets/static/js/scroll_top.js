let mybutton = document.getElementById("scroll-top");

window.addEventListener("scroll", function () {
    if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
    ) {
        mybutton.classList.remove("hidden");
    } else {
        mybutton.classList.add("hidden");
    }
});
