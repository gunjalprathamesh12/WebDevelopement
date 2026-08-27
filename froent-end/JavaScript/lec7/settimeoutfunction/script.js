console.log("hi");
setTimeout(() => {
  console.log("hello");
}, 2000);
console.log("bye");

//here output wil be hi bye and after 2second it will display hello
//js does not 2 sconds to execute that function it simply goe to next one and execte further and when 2 seconds get don tn execute that function

//this is also called as non blocking beaviour
