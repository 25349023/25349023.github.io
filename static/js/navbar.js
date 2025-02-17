let navToggle = document.getElementById("toggle-navbar");
let items = document.querySelectorAll("header nav .option");
let smallView = false;

function hideNavbar() {
    for (let li of items) {
        li.style.display = "none";
    }
}

function showNavbar() {
    for (let li of items) {
        li.style.removeProperty("display");
    }
}

navToggle.addEventListener("click", () => {
    let toHide = items[0].classList.contains("expanded");
    if (toHide) {
        setTimeout(hideNavbar, 805);
    } else {
        showNavbar();
        setTimeout(hideNavbar, 810);
        setTimeout(showNavbar, 812);
    }
    setTimeout(function() {  // takes 800 ms
        for (let li of items) {
            li.classList.toggle("expanded");
        }
    }, 5);
});

window.addEventListener("load", function() {
    if (window.innerWidth <= 668) {
        smallView = true;
        hideNavbar();
    }
});

window.addEventListener("resize", function() {
    if (window.innerWidth <= 668 && !smallView) {
        smallView = true;
        hideNavbar();
        for (let li of items) {
            li.classList.remove("expanded");
        }
    } else if (window.innerWidth > 668 && smallView) {
        smallView = false;
        showNavbar();
    }
});
