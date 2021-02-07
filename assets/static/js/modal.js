let modal = document.getElementById("modal");
let images = document.querySelectorAll(".post-content img");

function closeModal() {
    modal.classList.add("hidden");
}

function showModal(target) {
    let img = modal.querySelector("img");
    let figc = modal.querySelector("figcaption");
    img.src = target.src;
    figc.textContent = target.alt;
    modal.classList.remove("hidden");
}

modal.addEventListener("click", closeModal);
window.addEventListener("load", () => {
    for (let child of modal.children) {
        child.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }
    for (let img of images) {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            showModal(img);
        });
    }
});
