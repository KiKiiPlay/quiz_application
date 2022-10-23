const firstAns = document.getElementById("ans1");
const secondAns = document.getElementById("ans2");
const thirdAns = document.getElementById("ans3");
const fourthAns = document.getElementById("ans4");
const allAns = document.getElementsByClassName("answer_container");
const questionField = document.getElementById("question_container");
let correctQuestion = 0;
let wrongQuestion = 0;

const arrayOfQuestions = ["2 + 2", "3 + 3", "4 + 4", "5 + 5"];

const firstQuestion = function () {
  questionField.innerText = arrayOfQuestions[0];
  firstAns.innerText = "6";
  secondAns.innerText = "3";
  thirdAns.innerText = "4";
  fourthAns.innerText = "0";
  console.log(firstAns.value);
  //   if (thirdAns === true) {
  //     correctQuestion++;
  //     console.log(correctQuestion);
  //   } else {
  //     wrongQuestion++;
  //     console.log(correctQuestion);
  //   }
};

window.onload = function () {
  firstQuestion();
};
