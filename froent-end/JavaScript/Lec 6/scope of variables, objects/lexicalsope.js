function outerfuntion() {
  let a = 10;
  let b = 20;
  function innerfunctin() {
    console.log(a + b);
  }
  innerfunctin();
}
outerfuntion();
