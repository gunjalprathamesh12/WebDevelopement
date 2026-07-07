function call(print, count) {
  for (let i = 0; i < count; i++) {
    print();
  }
}

function print() {
  console.log("Hello World");
}

call(print, 500);
