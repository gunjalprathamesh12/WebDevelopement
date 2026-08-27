let btn = document.createElement("button");
btn.innerText = "click";
console.dir(btn);
document.body.appendChild(btn);

btn.addEventListener("click", function () {
  console.log("Button clicked!");
  btn.style.backgroundColor = "red";
});


let img=document.createElement("img");
img.src="C:\\Users\\PRATHAMESH\\Downloads\\spiderman_img.png";
img.alt="scenery";
img.style.width="300px";
img.style.height="300px";
document.body.appendChild(img);