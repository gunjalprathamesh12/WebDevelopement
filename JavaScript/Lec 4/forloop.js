// Question: Print all numbers from 1 to 99
for (let i = 1; i < 100; i++) {
  console.log(i);
}

// Question: Print the multiplication table of a number entered by the user
let number = prompt("Enter a number");
for (let i = 1; i <= 10; i++) {
  console.log(i * number);
}

// Question: Find the sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);

// Question: Print a 5x5 star pattern using nested loops
for(let i=0;i<5;i++)
{
    for(let j=0;j<5;j++)
    {
        console.log("*");
    }
}

// Question: Print numbers from 1 to 100, but replace multiples of 3 with "Fizz",
// multiples of 5 with "Buzz", and multiples of both with "FizzBuzz"
for(let i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }else if(i%5==0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}
