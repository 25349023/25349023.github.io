let navToggle = document.getElementById("toggle-navbar");
let items = document.querySelectorAll("header nav .option");

function hideNavbar() {
    for (let li of items) {
        li.style.display = "none";
    }
}

navToggle.addEventListener("click", () => {
    let toHide = items[0].classList.contains("expanded");
    if (toHide) {
        setTimeout(hideNavbar, 805);
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

window.addEventListener("load", function() {
    if (window.innerWidth <= 668) {
        hideNavbar();
    }
});

window.addEventListener("resize", function() {
    if (window.innerWidth <= 668) {
        hideNavbar();
        for (let li of items) {
            li.classList.remove("expanded");
        }
    } else {
        for (let li of items) {
            li.style.removeProperty("display");
        }
    }
});
