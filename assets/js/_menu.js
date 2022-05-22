import "../css/_menu.pcss";

const menuBtn = document.getElementById("menu-toggle");
const navigation = document.getElementById("main-navigation");
const article = document.getElementById("main-article");

function toggleClassName(el, className) {
    if (el.classList.contains(className)) {
        el.classList.remove(className);
    } else {
        el.classList.add(className);
    }
}

menuBtn.addEventListener("click", function (e) {
    e.preventDefault();
    toggleClassName(menuBtn, "menu-closed");
    toggleClassName(navigation, "hidden");
    toggleClassName(article, "hidden");
});
