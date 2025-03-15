const introTexts = [
    "Turning ideas into interactive and functional websites.",
    "Crafting seamless user experiences with clean code.",
    "Building responsive and modern web applications.",
    "Innovating the web, one project at a time!"
];

let index = 0;
const introElement = document.getElementById("intro-text");

function changeText() {
    introElement.style.opacity = 0; // Fade out effect
    setTimeout(() => {
        introElement.innerText = introTexts[index]; // Change text
        introElement.style.opacity = 1; // Fade in effect
        index = (index + 1) % introTexts.length; // Loop through texts
    }, 500); // Wait 500ms for smooth transition
}

// Change text every 3 seconds
setInterval(changeText, 1000);
