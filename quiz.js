var bronze = document.createElement('img'); 
bronze.src = 'images/bronze.png';
bronze.width = 32;
bronze.height = 30;

var silver = document.createElement('img'); 
silver.src = 'images/silver.jpg';
silver.width = 32;
silver.height = 30;

var gold = document.createElement('img'); 
gold.src = 'images/gold.png';
gold.width = 32;
gold.height = 30;




var myName = window.prompt("What's your name?")
myName.toLowerCase();

while(myName.length < 6){
  alert("Username must be 6 or more letters long.")
  myName = prompt("Please enter your username.");
 }

 document.write("Welcome ", myName.toLowerCase(), ".");

 
 document.getElementById("button").addEventListener("click", displayDate);



 

function check(){
  var c=0;
  var q1=document.quiz.question1.value;
  var q2=document.quiz.question2.value;
  var q3=document.quiz.question3.value;
  var q4=document.quiz.question4.value;
  var q5=document.quiz.question5.value;
  var result=document.getElementById("result");
  var quiz=document.getElementById("quiz");
  if (q1=="2. Neil Armstrong") {c++}
  if (q2=="3. Cherry Blossom") {c++}
  if (q3=="1. Sweden") {c++}
  if (q4=="2. 365") {c++}
  if (q5=="4. 13") {c++}
  quiz.style.display="none";
 
  if(c == 0) {

    result.textContent=`Your result is ${c}. Don't give up! Try again.`

  } else if (c == 1 || c == 2) {

      result.textContent= `Your result is ${c}. Alright! Try improving your score! Heres a bronze crown: `;
      result.appendChild(bronze);

  } else if(c == 3 || c == 4) {

      result.textContent=`Your result is ${c}. Nice job, heres a silver crown: `
      result.appendChild(silver);

  } else {

      result.textContent=`Your result is ${c}. Perfect score well done, heres a golden crown: `
      result.appendChild(gold);

  }



}


function extraMath() {
  
  var num1 = Math.floor(Math.random() * 20);
  var num2 = Math.floor(Math.random() * 10);
  var userAnswer = prompt("What is " + num1 + "+" + num2);
  if (parseInt(userAnswer) === num1 + num2) {
    alert("Correct!");
  } else if (userAnswer === null || userAnswer === "") {
    alert("Please give an answer.");
  } else {
    alert(`The right answer was: ${num1 + num2}`);
  }
  buttonz.style.display="none";
}


document.getElementById("buttonz").addEventListener("click", function() {
  document.getElementById("button").innerHTML = "";
});

/*
const quizData= [
  {
    question: "which language runs in a web browser",
    a: "java",
    b: "c",
    c: "Python",
    d: "javascript",
    correct: "d",
  },
  {
    question: "which language runs in a web browser",
    a: "java",
    b: "c",
    c: "Python",
    d: "javascript",
    correct: "d",
  },
  {
    question: "which language runs in a web browser",
    a: "java",
    b: "c",
    c: "Python",
    d: "javascript",
    correct: "d",
  },
  {
    question: "which language runs in a web browser",
    a: "java",
    b: "c",
    c: "Python",
    d: "javascript",
    correct: "d",
  },
  {
    question: "which language runs in a web browser",
    a: "java",
    b: "c",
    c: "Python",
    d: "javascript",
    correct: "d",
  }
]

const quiz= document.getElementById("quiz")
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const e_text = document.getElementById("e_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswer()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
  e_text.innerText = currentQuizData.e
}

function deslectAnswers() {
  answerEls.forEach(answerEls => answerEls.checked = false)

}

function getSelected(){
  let answerEls
  answerEls.forEach(answerEl => {
    if(answerEl.checked) {
      answer = answerEl.id

    }
  })
  return answer
}
*/
