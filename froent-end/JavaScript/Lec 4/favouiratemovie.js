let favouritemovie="Avatar";
let guess=prompt("Guess my favourite movie");
while(guess!=favouritemovie){
    guess=prompt("Wrong guess! Try again");
}
if(guess==favouritemovie){
    console.log("Correct! My favourite movie is indeed "+favouritemovie);
}