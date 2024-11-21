const hamburger = document.querySelector("#hamburger");
const hamSvg = document.querySelector("#hamburger svg");
const sideBar = document.querySelector("#sidebar");
const path = document.querySelector("#path");

hamburger.addEventListener("click", () => {
    path.classList.toggle("opacity-60");
    if (sideBar.classList.contains("translate-y-[450px]")) {
        // sidebar closed
        document.documentElement.style.overflow = "scroll";
        document.body.scroll = "yes";

        sideBar.classList.remove("translate-y-[450px]");
        sideBar.classList.add("translate-y-[0]");
    } else {
        // Sidebar opened
        document.documentElement.style.overflow = "hidden";
        document.body.scroll = "no";
        
        sideBar.classList.remove("translate-y-[0]");
        sideBar.classList.add("translate-y-[450px]");
    }
    
});