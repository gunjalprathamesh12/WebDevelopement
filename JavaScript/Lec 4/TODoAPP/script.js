let todo=[];
let req=prompt("please enter your request");

while(true){
    if(req=="quit"){
        console.log("Thanks for using our app");
        break;
    }
    if(req == "list"){
        for(let i=0;i<todo.length;i++){
            console.log(`${i}: ${todo[i]}`);
        }
    }   }
    