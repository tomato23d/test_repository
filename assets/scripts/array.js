const fruits = ["apple", "banana", "lemon"];


console.log(fruits.sort());


const numbers = [2,3,6,7,8];

function double(numbers) {return numbers*2};
const dbls = numbers.map(double);
console.log(dbls);

const Buttons = ["B11", "B22", "B33", "B44"];
console.log(Buttons.indexOf("B11"));
const Choices = ["red", "blue", "green", "black"];
console.log(Choices.indexOf("red"));

function myChoice (){
if (Buttons.indexOf("B33") === Choices.indexOf("green")){
    console.log ("yes")}
else (console.log ("no"));}
myChoice();


const values = [];
for (let x=0; x<10; x++) {values.push([2**x, 2*x**2]);};
console.table (values); ///output is a table/matrix



