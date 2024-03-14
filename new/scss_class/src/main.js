document.addEventListener("DOMContentLoaded", () => {
  const moreBtn = document.querySelector(".more-btn");
  const cancelBtn = document.querySelector(".x-btn");
  let ulElement = document.querySelector(".header__ul");
  let title = document.querySelector(".title");

  moreBtn.addEventListener("click", () => {
    ulElement.style.display = "flex";
    title.style.display = "none";
  });

  cancelBtn.addEventListener("click", () => {
    ulElement.style.display = "none";
    title.style.display = "grid";
  });

  const viewPort = () => {
    const width = window.innerWidth;

    if (width >= 768 && width < 1024) {
      ulElement.style.display = "flex";
      title.style.display = "none";
    } else if (width < 768) {
      ulElement.style.display = "none";
      title.style.display = "grid";
    }
  };
  window.addEventListener("resize", viewPort);
  viewPort();
});
