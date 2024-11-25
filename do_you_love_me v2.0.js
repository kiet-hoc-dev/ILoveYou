const questionContainer = document.querySelector(".question-container");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const heartLoader = document.querySelector(".cssload-main");
const yesResultContainer = document.querySelector(".result-container.yes");
const noResultContainer = document.querySelector(".result-container.no");
const gifResult = document.querySelector(".gif-result");
const restartBtns = document.querySelectorAll(".restart-btn");

function result(questionContainer, heartLoader, resultContainer, gifResult) {
  questionContainer.style.display = "none";
  resultContainer.style.display = "inherit";
  gifResult.play();
}

yesBtn.addEventListener("click", () => {
  result(questionContainer, heartLoader, yesResultContainer, gifResult);
});

noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

noBtn.addEventListener("click", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

let clickCount = 0;

noBtn.addEventListener("click", () => {
  clickCount++;

  if (clickCount === 10) {
    const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
    const newY = Math.floor(Math.random() * questionContainer.offsetHeight);

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;

    result(questionContainer, heartLoader, noResultContainer, gifResult);

    clickCount = 0;
  }
});

restartBtns.forEach((button) => {
  button.addEventListener("click", () => {
    heartLoader.style.display = "inherit";
    yesResultContainer.style.display = "none";
    noResultContainer.style.display = "none";

    const timeoutId = setTimeout(() => {
      questionContainer.style.display = "inherit";
      heartLoader.style.display = "none";
    }, 3000);
  });
});
