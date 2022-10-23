const correctResult = localStorage.getItem("correctResult");
const wrongResult = localStorage.getItem("wrongResult");
const correctQuantiy = document.getElementById("correctQuantity");
const wrongQuantiy = document.getElementById("wrongQuantity");

const showResult = function () {
  const percentageCorrect = (parseInt(correctResult) * 100) / 4;
  const percentageWrong = (parseInt(wrongResult) * 100) / 4;
  correctQuantiy.innerText =
    "Correct: " + correctResult + " - (" + percentageCorrect + "%)";
  wrongQuantiy.innerText =
    "Wrong: " + wrongResult + " - (" + percentageWrong + "%)";
};

window.onload = function () {
  showResult();
};
