let mybutton = document.getElementById("scroll-top");

window.onscroll = function scrollFunction() {
  if (
    document.body.scrollTop > 240 ||
    document.documentElement.scrollTop > 240
  ) {
    mybutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("hidden");
  }
};
