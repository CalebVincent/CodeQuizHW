var someDiv = document.getElementyById("Notarealid");

function displayQuestion(questionIndex){
    someDiv.innerHtml = "";
   var title =  questions[questionIndex].title;
   var choices =  questions[questionIndex].choices;
   var answer = questions[questionIndex].alerts;

   var p = document.createElement("p");
   p.textContent = title;
   someDiv.append(p);

   // choices // for loop
   for(var i = 0; i < choices; i++){
       var choice = choices[i];
       var button = document.createElement("button");
       if(choice === answer){
           // this button should be marked correct
       }
       else {
           // this is a wrong answer
       }
       someDiv.append(button);
   }
   //var button = document.createElement("buttton");
}

displayQuestion(0);
