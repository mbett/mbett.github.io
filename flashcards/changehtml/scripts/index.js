let myFlashcards = [ {
    "question": "Madame Uppercut\'s age",
    "answer": 39
    }, 
    {
     "question": "What is the capital of PA?",
     "answer": "Harrisburg"
     },
     {
     "question": "17*4",
     "answer": 68
     }
     ];
    
    
let counter = 0;

function displayQuestion() {
     if (counter == myFlashcards.length)
         counter = 0;
     document.getElementById("myQuestion").innerHTML = myFlashcards[counter].question + counter;
     //document.getElementById("myAnswer").innerHTML = "";
 }

function displayAnswer() {
     document.getElementById("myAnswer").innerHTML = myFlashcards[counter].answer;
     ++counter;
 }
