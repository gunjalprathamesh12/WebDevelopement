let h1 = document.querySelector("h1");

function changecolor(color, delay, nextcolor) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextcolor) nextcolor();
  }, delay);
}

changecolor("red", 2000, () => {
  changecolor("orange", 3000, () => {
    changecolor("blue", 4000);
  });
});
