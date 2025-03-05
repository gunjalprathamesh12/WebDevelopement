let str = "Prathamesh gunjal software developer and ceo of google";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] == " ") {
    count++;
  }
}
console.log("No of words in a string is=" + count);
