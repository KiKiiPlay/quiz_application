const firstAns = document.getElementById("ans1");
const secondAns = document.getElementById("ans2");
const thirdAns = document.getElementById("ans3");
const fourthAns = document.getElementById("ans4");
const allAns = document.querySelectorAll(".answer_container");
const questionField = document.getElementById("question_container");
let correctQuestion = 0;
const correctResult = document.getElementById("correctQuantity");
const wrongResult = document.getElementById("wrongQuantity");

const arrayOfQuestions = ["2 + 2", "3 + 3", "4 + 4", "5 + 5"];

// const showResult = function () {
//   const wrongQuestion = 4 - correctQuestion;
//   correctResult.innerText = "Correct: " + correctQuestion;
//   wrongResult.innerText = "Wrong: " + wrongQuestion;
// };

const fourthQuestion = function () {
  questionField.innerText = arrayOfQuestions[3];
  firstAns.innerText = "62";
  secondAns.innerText = "10";
  thirdAns.innerText = "14";
  fourthAns.innerText = "60";

  const getValue = function (event) {
    let correctAnswer = "10";
    const buttonValue = event.target.innerText;
    if (buttonValue === correctAnswer) {
      correctQuestion++;
      window.location.href = "finish_page.html";
      correctResult.innerText = "Correct: " + correctQuestion;
      wrongResult.innerText = "Wrong: " + wrongQuestion;
    } else {
      window.location.href = "finish_page.html";
      correctResult.innerText = "Correct: " + correctQuestion;
      wrongResult.innerText = "Wrong: " + wrongQuestion;
    }
  };

  allAns.forEach((div) => {
    div.addEventListener("click", getValue);
  });
};

const thirdQuestion = function () {
  questionField.innerText = arrayOfQuestions[2];
  firstAns.innerText = "8";
  secondAns.innerText = "1";
  thirdAns.innerText = "19";
  fourthAns.innerText = "2";

  const getValue = function (event) {
    let correctAnswer = "8";
    const buttonValue = event.target.innerText;
    if (buttonValue === correctAnswer) {
      correctQuestion++;
      fourthQuestion();
    } else {
      fourthQuestion();
    }
  };

  allAns.forEach((div) => {
    div.addEventListener("click", getValue);
  });
};

const secondQuestion = function () {
  questionField.innerText = arrayOfQuestions[1];
  firstAns.innerText = "2";
  secondAns.innerText = "4";
  thirdAns.innerText = "1";
  fourthAns.innerText = "6";

  const getValue = function (event) {
    let correctAnswer = "6";
    const buttonValue = event.target.innerText;
    console.log(buttonValue);
    if (buttonValue === correctAnswer) {
      correctQuestion++;
      thirdQuestion();
    } else {
      thirdQuestion();
    }
  };

  allAns.forEach((div) => {
    div.addEventListener("click", getValue);
  });
};

const firstQuestion = function () {
  questionField.innerText = arrayOfQuestions[0];
  firstAns.innerText = "6";
  secondAns.innerText = "3";
  thirdAns.innerText = "4";
  fourthAns.innerText = "0";

  const getValue = function (event) {
    let correctAnswer = "4";
    const buttonValue = event.target.innerText;
    if (buttonValue === correctAnswer) {
      correctQuestion++;
      secondQuestion();
    } else {
      secondQuestion();
    }
  };

  allAns.forEach((div) => {
    div.addEventListener("click", getValue);
  });
};

window.onload = function () {
  firstQuestion();
};
