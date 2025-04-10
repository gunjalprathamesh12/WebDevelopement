var editor=CodeMirror.fromTextArea(document.getElementById("editor"), {
    mode:"text/x-c++src",
    theme:"dracula",    
    lineNumbers:true,
    autoCloseBrackets:true,
    autoCloseTags:true,
});

var width = window.innerWidth 
editor.setSize(0.7*width,"500");

/* */
let editor;

window.onload = function () {
  editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    lineNumbers: true,
    mode: "text/x-c++src",
    theme: "dracula",
    autoCloseBrackets: true,
  });
};

function runCode() {
  let code = editor.getValue();
  document.querySelector(".output").innerText = "Executing...\n" + code;
}

function clearOutput() {
  document.querySelector(".output").innerText = "";
}

function toggleFullScreen() {
  document.documentElement.requestFullscreen();
}

function shareCode() {
  alert("Share feature coming soon!");
}