const toggleBtn = document.querySelector(".header__nav__menu");
const menu = document.querySelector(".header__mediumsize");
const icon = document.querySelector(".header__nav__menu i");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");

  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times"); // "fa-times"는 Font Awesome의 'X' 아이콘 클래스입니다.
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});
