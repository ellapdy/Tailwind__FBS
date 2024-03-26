const starNav = document.querySelectorAll(".about__nav__link");
const starContent = document.querySelectorAll(".about__item");
starNav.forEach((star) => {
  star.addEventListener("click", () => {
    removeActiveStar();
    star.classList.add("active");
    const activeContent = document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

var slider = tns({
  container: 'slider',
  items: 1,
  controls: false,
  autoplayButtonOutput: false,
  slideBy: 'page',
  autoplay: true
});

function removeActiveStar() {
  starNav.forEach((star) => {
    star.classList.remove("active");
  });
}
function removeActiveContent() {
    starContent.forEach((content) => {
      content.classList.remove("active");
    });
}

const burger = document.querySelector(".burger__menu");
const headerA = document.querySelector(".header__action");
burger.addEventListener("click", () =>{
    burger.classList.toggle("open");
    headerA.classList.toggle("open");
})

const links = document.querySelectorAll(".links__item h4");
links.forEach((link) => {
    link.addEventListener("click", () => {
        link.querySelector("i").classList.toggle("open");
        link.nextElementSibling.classList.toggle("open");
    });
});