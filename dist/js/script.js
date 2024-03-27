const burger = document.querySelector(".burger__menu");
const headerA = document.querySelector(".header__action");
burger.addEventListener("click", () =>{
    burger.classList.toggle("open");
    headerA.classList.toggle("open");
})

const links = document.querySelectorAll(".links__item h4");
links.forEach((link) => {
    link.addEventListener("hover", () => {
        link.querySelector("i").classList.toggle("open");
        link.nextElementSibling.classList.toggle("open");
    });
});