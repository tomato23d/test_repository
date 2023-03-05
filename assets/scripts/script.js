
//learning to create new elements via script, its styling and text populate
//and saving to local storage
//data entry from form to storage is yet to be done
var submitButton = document.querySelector("#submitting");


//next 2 lines below demonstrate query selector and console log its children, including style performed by setAttribute below
var list = document.querySelector("ol");
console.log(list.children[3]);

var find = document.getElementById("i1s");
console.log(i1s);

var contact = document.querySelector(".contact");
contact.setAttribute("style", "color: red; font-size: 50px; background:yellow" );

//textContent replaces previous text
contact.textContent = "Welcome to this class!!!";


var answer = contact.textContent;
console.log(answer);
console.log(contact.textContent);

localStorage.setItem('today', answer);


function memorise(){


var moreanswer = document.getElementById("day");
var inputa = document.querySelector("#textarea");


localStorage.setItem('now', 'moreanswer');

var morning = localStorage.getItem('today') + "   "+
localStorage.getItem('now');

console.log(morning)
};

submitButton.addEventListener("click", memorise());
