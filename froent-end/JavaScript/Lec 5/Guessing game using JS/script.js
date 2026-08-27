let number = prompt("enter maximum number between 1 and 100");

let randomnumber = Math.round(Math.random() * number) + 1;
let guess = prompt("guess the number between 1 and " + number);

while (true) {
  if (guess == "quit") {
    console.log("you quit the game");
    break;
  }
  if (guess == randomnumber) {
    console.log("you win");
    break;
  } else {
    console.log("try again");
    guess = prompt("guess the number between 1 and " + number);
  }
}
