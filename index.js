var readlineSync = require("readline-sync");

var score = 0;

console.log("Do you know ARIS")

var userName = readlineSync.question("\nEnter your Name: ");

console.log("Welcome "+ userName + " to Do you know ARIS quiz")

console.log("\n*There are total five questions." + "\n*For each correct answer you wil get 2 points." + "\n*For each wrong answer 1 point will deduct.")
  console.log("====================================\n")

var questions = [

  {
    question : "Where do I live?\n",
    answer : "Delhi"


  },
  {
      question: "What's my Age?\n",
      answer: "21"


  },

  {

    question: "What's my college name?\n",
    answer:"Tier 3"

  },

  {

    question: "What is my favourite dish?\n",
    answer:"Butter Chicken"

  },

  {

    question: "What is my Hobby\n",
    answer:"singing"

  }
]

function play(question,answer) {

  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()) {

    console.log("\nYou are right\n")
    score = score + 2;
    console.log("Current Score : " + score)
  console.log("====================================\n")
    
  }

  else {

    console.log("\nYou are wrong\n")
    score = score-1;
    console.log("Current Score : " + score)
  console.log("====================================\n")
  }
}

var z = 0;
for(var i=0; i<questions.length; i++){
  console.log("Question" + z++ +"\n--------")
  play(questions[i].question, questions[i].answer)

}

console.log("\nYour final score is " + score)

if(score === 10){
  console.log("You know me very well!! XD")
}


