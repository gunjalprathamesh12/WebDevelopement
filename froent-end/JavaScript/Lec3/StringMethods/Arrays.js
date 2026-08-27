let students=[1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<students.length;i++){
    console.log(students[i]);
}   

let stud=["kunal","satyarth","satyam","satyarth"];
for(let j=0;j<stud.length;j++){
    console.log(stud[j]);
}

let emptyarray=[];
let flag=0;
for(let k=0;k<emptyarray.length;k++){
    console.log(emptyarray[k]);
    if(k[0]==null){
        flag=1;
    }
}
if(flag==1){
    console.log("Array is empty");
}else{    console.log("Array is not empty");
}