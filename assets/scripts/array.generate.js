var b1 = document.getElementById("B11");
var b2 = document.getElementById("B22");
var b3 = document.getElementById("B33");
var b4 = document.getElementById("B44");

var nextQ = document.getElementById("nextQ");

const sa1 =[];
var Result = [];
// cA stands for correct answer as indicated by index within the question choices listing rather than within array
const cA = [1,2,4,3,4];
//const battons = ["B11", "B22", "B33", "B44"];

function generateIndex(){
 for (let i=0; i<sa1.length; i++)
 { //console.log(sa1[i]);
  // console.log(sa1[i].charAt(2));
   Result[i]=sa1[i].charAt(2)-cA[i];
 }
  console.log(Result);
};



b1.addEventListener('click',  function(){sa1.push(b1.id); console.log(sa1);});

b2.addEventListener('click',  function(){sa1.push(b2.id); console.log(sa1);});

b3.addEventListener('click',  function(){sa1.push(b3.id); console.log(sa1);});

b4.addEventListener('click',  function(){sa1.push(b4.id); console.log(sa1);});
            
nextQ.addEventListener('click', generateIndex);


//populate results
const results = {
    numberOfCorrect:[],
    Time:[],
    Player:[]
};

