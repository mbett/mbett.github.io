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
 while (counter < myFlashcards.length ) {
     alert(myFlashcards[counter].question);
     alert(myFlashcards[counter].answer);
     ++counter;
 }
