const questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["alerts", "booleans", "strings", "numbers"],
      answer: "alerts",
    
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "parentheses", "curly brackets", "square brackets"],
      answer: "parentheses",
    },
    {
        title: 'Arrays in JavaScript can be used to store ____.',
        choices: [
          'numbers and strings',
          'other arrays',
          'booleans',
          'all of the above',
        ],
        answer: 'all of the above',},
        {
            title:
              'String values must be enclosed within ____ when being assigned to variables.',
            choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
            answer: 'quotes',
          },
          {
            title:
              'A very useful tool used during development and debugging for printing content to the debugger is:',
            choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
            answer: 'console.log',
          },
];

const myButtonChoice = ["b11", "b22", "b33", "b44"];
//const myButtonRChoice = ["b11", "b22", "b44", "b33","b44"];
var myChoice = "b44";
var victory = 0;

//for (let x = 0; x < questions.length; x++)
//{console.log(questions[x].choices);
//console.log(questions[x].answer);}

//for (let i = 0; i < questions[0].choices.length; i++)
//{console.log(questions[0].choices[i])}

//for (let x = 0; x < questions.length; x++)
//for (let i = 0; i < questions[0].choices.length; i++)
//{console.log(questions[x].choices[i]);}

//for (let x = 0; x < questions.length; x++)
//{console.log("answer: "+questions[x].answer);}


for (let x = 0; x < questions.length; x++)
for (let i = 0; i < questions[0].choices.length; i++)
{if  (questions[x].choices[i]=== questions[x].answer)
  {console.log("qn array index: " + x + "  index of correct choice : "
  +i + " answer from choices array: "+ questions[x].choices[i])}}


  for (let x = 0; x < questions.length; x++)
  for (let i = 0; i < questions[0].choices.length; i++)
  {if  (questions[x].choices[i]=== questions[x].answer && myButtonChoice.indexOf(myChoice) ===i)
    {console.log("qn unmber: " + x + "  index of correct choice as per button : "
    +i + questions[x].choices[i]); victory ++}}
  
console.log(myButtonChoice.indexOf(myChoice));
console.log(victory);





const gameOutcome = [
      {player: "aa",
       result: ["victory", "loss"],
       questions: {questionNumber: [1,2,3,4,5],
                    rightIndex: [0, 1, 3, 2, 3],
                    selectedIndex: ["myChoice"]}}];

const gameOutcomeExample = {
      questionNumber: [1,2,3,4,5],
      rightIndex: [0, 1, 3, 2, 3],
      isCorrect: [true, true, true, true, true]};


const gameOutcome1 =[ {
                        questionNumber: [],
                        rightIndex: [],
                        isCorrect: []}];