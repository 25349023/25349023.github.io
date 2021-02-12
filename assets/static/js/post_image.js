function liftImages() {
    let images = document.querySelectorAll(".post-content p img");
    for (let img of images) {
        let parent = img.parentNode;
        parent.after(img);
        parent.remove();
    }
}

window.addEventListener('load', liftImages)