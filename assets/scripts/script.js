
//learning to create new elements via script, its styling and text populate
//and saving to local storage
//data entry from form to storage is yet to be done
var month = document.getElementById("month");
var day = document.getElementById("day");
var contact = document.querySelector(".contact");

var submitButton = document.querySelector("#submitting");
var submissionResponse = document.querySelector("#response");
//var countClick = document.getElementById("count")


//next 2 lines below demonstrate query selector and console log its children, including style performed by setAttribute below
var list = document.querySelector("ol");
//console.log(list.children[3]);

var find = document.getElementById("i1s");
//console.log(i1s);


contact.setAttribute("style", "color: red; font-size: 50px; background:yellow" );
contact.textContent = "Welcome to this class!!!";

//localStorage.setItem('today', answer);

//preventDefault - more on web/api/event/preventDefault
function showResponse(event){
   event.preventDefault();
    console.log(event);
   
    var entry = month.value + "  " + day.value;
    submissionResponse.textContent = entry;

    var today = day.value
    localStorage.setItem('monthtoday', month.value);
    localStorage.setItem('today', today);
  

    var message = "Today is   " +localStorage.getItem('today') + "   "+ localStorage.getItem('monthtoday');
console.log(message)
};



submitButton.addEventListener("click", showResponse);



//this active button outputs number of times it has been clicked so far
//countClick is span id on button
//submitButton.addEventListener("click", function()
//{countClick++; console.log(countClick); showResponse});
