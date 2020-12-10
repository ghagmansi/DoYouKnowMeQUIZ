var userscore = 0;
var hasBeaten = "no";
var readlineSync = require('readline-sync');

var topThreeScores =
  [{ name: "Mansi", tscore: 10 }, { name: "Anjali", tscore: 10 }, { name: "Kavya", tscore: 9 }]

var quesListMultiple =
  [{ ques: "1. What is my favourite season? ", ans: 4, options: ['Summer', 'Rainy', 'Autumn', 'Winter'] },
  { ques: "2. Which is my all time favourite dish for breakfast? ", ans: 2, options: ['Poha', 'Idli Sambar', 'Bread Butter', 'Dosa'] },
  { ques: "3. What TV show I liked the most in my childhood amongst these? ", ans: 1, options: ['Oswald', 'Noddy', 'Popeye', 'Powerpuff Girls'] },
  { ques: "4. What is my favourite board game? ", ans: 3, options: ['Carrom', 'Snakes and Ladders', 'Ludo', 'Monopoly'] },
  { ques: "5. Which sport match would I like to watch? ", ans: 3, options: ['Cricket match', 'Badminton match', 'Kabaddi match', 'Football match'] }]

var quesListYesNo =
  [{ ques: "6. I prefer beaches over mountains? ", ans: true },
  { ques: "7. I like tea more than coffee? ", ans: false },
  { ques: "8. I would rather party than go for a nature walk? ", ans: false },
  { ques: "9. I like dogs more than cats? ", ans: true },
  { ques: "10. Amongst fruit and chocolate, chocolate cake is my favourite? ", ans: true }]

console.log('------------------------------');
console.log('   DO   YOU   KNOW   MANSI ?  ');
console.log('------------------------------');

console.log("\nWhat is your name? ");
var userName = readlineSync.question("Type your name and press enter: ");
console.log("\n Welcome " + userName + " to 'Do you know Mansi Quiz !!' ");
console.log("\nRules for this Game:");
console.log("\n1) There are 10 questions in the quiz.\n2) Questions 1 to 5 have 4 multiple options. Only one option is correct in each question.\n3) Questions 6 to 10 are Yes or No questions.\n4) You score 1 point for every right answer.\n");

readlineSync.keyInPause('To begin the quiz, press Y :', { limit: ['Y', 'y'], guide: false });

console.log("\n-----MULTIPLE CHOICE------");
for (var i = 0; i < quesListMultiple.length; i++) {
  console.log(" ");
  playGameMultiple(quesListMultiple[i].ques, quesListMultiple[i].options, quesListMultiple[i].ans);
}

console.log("---------YES OR NO---------");
console.log("To answer these questions:\n Type Y for Yes \n Type N for No ");
for (var i = 0; i < quesListYesNo.length; i++) {
  console.log(" ");
  playGameYesNo(quesListYesNo[i].ques, quesListYesNo[i].ans);
}

checkIfInTopThree(topThreeScores, userscore, userName);
displayTopThreeScores(topThreeScores);

function playGameMultiple(question, options, answer) {
  console.log(question);
  var userAns = readlineSync.keyInSelect(options, "Option selected ? ", { guide: false, cancel: false });

  if (userAns + 1 === answer) {
    console.log("Option " + (userAns + 1) + " is the right answer!! ");
    userscore = userscore + 1;
  } else {
    console.log("X X...That's wrong...X X");
  }
  console.log("Score : " + userscore + " ");
  console.log("");
}

function playGameYesNo(question, answer) {

  var userAns = readlineSync.keyInYNStrict(question, { guide: false });

  if (userAns === answer) {
    console.log("You are right !! ");
    userscore = userscore + 1;
  } else {
    console.log("X X...That's wrong...X X");
  }
  console.log("Score : " + userscore + " ");
  console.log("");
}

function displayTopThreeScores(topThreeScores) {
  console.log(" ");
  console.log("\n\n- - - -Top 3 scorers- - - -");
  console.log("\n     S C O R E B O A R D     ");
  console.log("     Name      |     Score   ");
  for (var i = 0; i < topThreeScores.length; i++) {
    console.log("     " + topThreeScores[i].name + "         " + topThreeScores[i].tscore);
  }
}

function checkIfInTopThree(topThreeScores, userscore, userName) {
  console.log(" ");
  for (var k = 0; k < topThreeScores.length; k++) {
    var result = hasBeatenHighScore(topThreeScores[k].tscore, userscore);
  }

  if (result === "yes") {
    console.log("\n  " + userName + " your final score is: " + userscore + "  ");
    console.log("\nCongratulations!! You are among top three scorers.\nPlease send us a screenshot of your score.");
  }
  else {
    console.log("\n  " + userName + " your final score is: " + userscore + "  ");
  }
}

function hasBeatenHighScore(existingtscore, userscore) {
  if (userscore >= existingtscore) {
    hasBeaten = "yes";
  }
  return hasBeaten;
}
