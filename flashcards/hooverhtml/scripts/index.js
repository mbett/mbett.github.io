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
let questionAsked = false; // make sure that they ask the question first!

function displayQuestion() {
     if (counter == myFlashcards.length)
         counter = 0;
    document.getElementById("myQuestion").innerHTML = myFlashcards[counter].question;
    questionAsked = true;
 }

function displayAnswer() {
     if ( questionAsked == true ) {
        document.getElementById("myAnswer").innerHTML = myFlashcards[counter].answer;
        questionAsked = false;
        ++counter;
     } else {
        document.getElementById("myAnswer").innerHTML = "Please click on the question first, then the answer.";
     }
 }
