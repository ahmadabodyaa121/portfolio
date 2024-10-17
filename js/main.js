// add class active to header on scroll
let header = document.querySelector(".header");
window.onscroll = function () {
    if (window.scrollY > 50) {
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active");
    }
}
