document.addEventListener("DOMContentLoaded", () => {
  const spanTexts = document.querySelectorAll(".spanText");

  spanTexts.forEach((spanText) => {
    let text = spanText.innerText;
    let space = "";

    for (let i of text) {
      space += `<span>${i}</span>`;
    }

    spanText.innerHTML = space;
  });
});
