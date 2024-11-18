const hamburger = document.querySelector("#hamburger");
const hamSvg = document.querySelector("#hamburger svg");
const sideBar = document.querySelector("#sidebar");

hamburger.addEventListener("click", () => {
    sideBar.classList.toggle("top-[-350px]");
    sideBar.classList.toggle("top-[110px]");
});