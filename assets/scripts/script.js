

var answer = window.prompt("give me a number","");




localStorage.setItem('myCat', answer);

var answer2 = localStorage.getItem('myCat');

console.log(answer2)