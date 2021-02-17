let navToggle = document.getElementById("toggle-navbar");

navToggle.addEventListener("click", () => {
    let items = document.querySelectorAll("header nav .option");
    for (let li of items) {
        li.classList.toggle("expanded");
    }
});
