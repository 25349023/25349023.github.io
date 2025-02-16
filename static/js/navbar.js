let navToggle = document.getElementById("toggle-navbar");

navToggle.addEventListener("click", () => {
    let items = document.querySelectorAll("header nav .option");
    let toHide = items[0].classList.contains("expanded");
    if (toHide) {
        setTimeout(function() {
            for (let li of items) {
                li.style.display = "none";
            }
        }, 805);
    } else {
        for (let li of items) {
            li.style.removeProperty("display");
        }
    }
    setTimeout(function() {
        for (let li of items) {
            li.classList.toggle("expanded");
        }
    }, 5);
});
