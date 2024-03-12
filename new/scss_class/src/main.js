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

  const verticalText = document.querySelectorAll(".verticalText");

  verticalText.forEach((verticalText) => {
    let verText = verticalText.innerText;
    let verSpace = "";

    for (let i of verText) {
      verSpace += `<span>${i}</span>`;
    }

    verticalText.innerHTML = verSpace;
  });
});
