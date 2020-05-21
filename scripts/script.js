var mines = [];

function numRandom(min, max) {
  return Math.floor((Math.random() * max) + min);
}

while (mines.length <= 16) {
  let newMine = numRandom(1, 101);
  if (mines.includes(newMine) == false) {
    mines.push(newMine);
  }
}

console.log("The exploding numbers are : " + mines);

let userResponses = [];
let busted = false;
let points = 0;


while (busted == false && points < 10) {
  userChoice = parseInt(prompt("Scegli un numero tra 1 e 100"));
  console.log("The number chosen is " + userChoice)

  if (userChoice > 0 && userChoice < 101 && !isNaN(userChoice)) {
    if (userResponses.includes(userChoice) == true) {
      alert("You've already selected this number!")
    } else if (mines.includes(userChoice) == true) {
      alert("A mine exploded! :(");
      busted = true;
      userResponses.push(userChoice);
    } else {
      alert("Pick another number!")
      userResponses.push(userChoice);
      points = points + 2;
      console.log(points, "points");
    }
  } else {
    alert("Please insert a valid number")
  }
}

if (points === 10) {
  console.log("You won!");
}
