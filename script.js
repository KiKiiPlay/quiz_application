const firstAns = document.getElementById("ans1");
const secondAns = document.getElementById("ans2");
const thirdAns = document.getElementById("ans3");
const fourthAns = document.getElementById("ans4");
const allAns = document.querySelectorAll(".answer_container");
const questionField = document.getElementById("question_container");
let correctQuestion = 0;
let wrongQuestion = 0;

const arrayOfQuestions = ["2 + 2", "3 + 3", "4 + 4", "5 + 5"];

const fourthQuestion = function () {
  let correctAnswer = "10";
  questionField.innerText = arrayOfQuestions[3];
  firstAns.innerText = "62";
  secondAns.innerText = "10";
  thirdAns.innerText = "14";
  fourthAns.innerText = "60";

  const getValue = function (event) {
    const buttonValue = event.target.innerText;
    if (buttonValue === correctAnswer) {
      correctQuestion++;
      console.log("Correct:", correctQuestion);
    } else if (buttonValue !== correctAnswer) {
      wrongQuestion++;
      console.log("Wrong:", wrongQuestion);
    }
  };

  allAns.forEach((div) => {
    div.addEventListener("click", getValue);
  });
};

const thirdQuestion = function () {
  let correctAnswer = "8";
  questionField.innerText = arrayOfQuestions[2];
  firstAns.innerText = "8";
  secondAns.innerText = "1";
  thirdAns.innerText = "19";
  fourthAns.innerText = "2";

  const getValue = function (event) {
    const buttonValue = event.target.innerText;
    if (buttonValue === correctAnswer) {
      correctQuestion++;
      fourthQuestion();
      console.log("Correct:", correctQuestion);
    } else if (buttonValue !== correctAnswer) {
      wrongQuestion++;
      fourthQuestion();
      console.log("Wrong:", wrongQuestion);
    }
  };

  allAns.forEach((div) => {
    div.addEventListener("click", getValue);
  });
};

const secondQuestion = function () {
  let correctAnswer = "6";
  questionField.innerText = arrayOfQuestions[1];
  firstAns.innerText = "2";
  secondAns.innerText = "4";
  thirdAns.innerText = "1";
  fourthAns.innerText = "6";

  const getValue = function (event) {
    const buttonValue = event.target.innerText;
    console.log(buttonValue);
    if (buttonValue === correctAnswer) {
      correctQuestion++;
      thirdQuestion();
      console.log("Correct:", correctQuestion);
    } else if (buttonValue !== correctAnswer) {
      wrongQuestion++;
      thirdQuestion();
      console.log("Wrong:", wrongQuestion);
    }
  };

  allAns.forEach((div) => {
    div.addEventListener("click", getValue);
  });
};

const firstQuestion = function () {
  let correctAnswer = "4";
  questionField.innerText = arrayOfQuestions[0];
  firstAns.innerText = "6";
  secondAns.innerText = "3";
  thirdAns.innerText = "4";
  fourthAns.innerText = "0";

  const getValue = function (event) {
    const buttonValue = event.target.innerText;
    if (buttonValue === correctAnswer) {
      correctQuestion++;
      secondQuestion();
      console.log("Correct:", correctQuestion);
    } else if (buttonValue !== correctAnswer) {
      wrongQuestion++;
      secondQuestion();
      console.log("Wrong:", wrongQuestion);
    }
  };

  allAns.forEach((div) => {
    div.addEventListener("click", getValue);
  });
};

window.onload = function () {
  firstQuestion();
};
