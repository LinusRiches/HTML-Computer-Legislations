document.addEventListener('DOMContentLoaded', () => {

const quizCorrects = document.getElementsByClassName('quiz-correct');
const quizIncorrects = document.getElementsByClassName('quiz-incorrect');

console.log(quizCorrects, quizIncorrects);

for (let i = 0; i < quizCorrects.length; i++)
{quizCorrects[i].addEventListener('mousedown',()=>
{quizCorrects[i].style.backgroundColor='rgb(0, 200, 13)', quizCorrects[i].style.borderColor='rgb(0, 255, 55)', quizCorrects[i].style.color='rgb(255, 255, 255)';});

for (let i = 0; i < quizIncorrects.length; i++)
{quizIncorrects[i].addEventListener('mousedown',()=>
{quizIncorrects[i].style.backgroundColor='rgb(191, 0, 0)', quizIncorrects[i].style.borderColor='rgb(255, 0, 0)', quizIncorrects[i].style.color='rgb(255, 255, 255)'});}}});

//WHAT IT WORKS. Things to remember: 1) Use [i] because its a class. 2) Put DOMContent loaded, as it makes sure the element has loaded before runnung the script. 3) No semi-colon after the for statement as you would just end it before you make your statement as to what will happen. I then made it look nicer.

function quizResponseRq1(){

let answers = {rq1:"1"};

const rq1SelectedElement = document.querySelector('input[name="rq1"]:checked'); 

if(!rq1SelectedElement) {alert('Required Field');}

else if (rq1SelectedElement.value === answers['rq1']) {alert('Nice Job!'), rq1SelectedElement.style.accentColor='rgb(0, 255, 55)';}

else {alert('Try Again.'), rq1SelectedElement.style.accentColor='rgb(255, 0, 0)';}}

// Not sure how to merge these effectively so its sorta just copy and pasted of quizResponseRq1

function quizResponseRq2(){

let answersRq2 = {rq2:"10"};

const rq2SelectedElement = document.querySelector('input[name="rq2"]:checked'); 

if(!rq2SelectedElement) {alert('Required Field');}

else if (rq2SelectedElement.value === answersRq2['rq2']) {alert('Nice Job!'), rq2SelectedElement.style.accentColor='rgb(0, 255, 55)';}

else {alert('Try Again.'), rq2SelectedElement.style.accentColor='rgb(255, 0, 0)';}};