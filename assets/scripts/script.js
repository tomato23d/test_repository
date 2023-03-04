
var answer = "";
var moreanswer = " ";
var submitButton = document.querySelector("#submitting");

//var answer = window.prompt("enter month", " ");
//var moreanswer = window.prompt("enter day", " ");
function memorise(){

var answer = document.getElementById("month").textContent;
var moreanswer = document.getElementById("day");
var inputa = document.querySelector("#textarea");



console.log(answer);

localStorage.setItem('today', 'answer');
localStorage.setItem('now', 'moreanswer');

var morning = localStorage.getItem('today') + "   "+
localStorage.getItem('now');

console.log(morning)
};

submitButton.addEventListener("click", memorise());