let myFlashcards = [ {
    "question": "Name this species of bird.",
    "image" : "images/barn-owl-2550068__340.webp",
    "answer": "Barn Owl"
    }, 
    {
    "question": "Name this species of bird.",
    "image" : "images/dove-2516641__340.webp",
    "answer": "Dove"
    }, 
    {
    "question": "Name this species of bird.",
    "image" : "images/hummingbird-2139279__340.webp",
    "answer": "Hummingbird"
    }, 
    {
    "question": "Name this species of bird.",
    "image" : "images/kingfisher-2046453__340.webp",
    "answer": "Kingfisher"
    }, 
 {
    "question": "Name this species of bird.",
    "image" : "images/owl-50267__340.webp",
    "answer": "Regular old Owl"
    }, 
{
    "question": "Name this species of bird.",
    "image" : "images/swan-2107052__340.webp",
    "answer": "Swan"
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

    // Replace the image if there is one.
    if (myFlashcards[counter].hasOwnProperty('image') == true)
        document.getElementById("myImage").src = myFlashcards[counter].image;
    else 
        document.getElementById("myImage").src = '';

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
