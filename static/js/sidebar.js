let sidebar = document.getElementById("sidebar");
let overlay = document.getElementById("overlay");
let sidebarHandle = document.querySelector("#sidebar .handle");
let icon = sidebarHandle.querySelector("i");

function toggleSidebar() {
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
    sidebar.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
}

sidebarHandle.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", toggleSidebar);
