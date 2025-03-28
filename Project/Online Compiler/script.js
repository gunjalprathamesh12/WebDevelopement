document.getElementById("editor").value = "<h1>Try SyntaxError..</h1>";

// Initialize CodeMirror
var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  lineNumbers: true, // Enable line numbers
  mode: "xml", // HTML mode
  theme: "dracula", // Dark theme
  matchBrackets: true,
  autoCloseBrackets: true,
});// Function to run code
function runCode() {
  let outputFrame = document.getElementById("output").contentWindow.document;
  outputFrame.open();
  outputFrame.write(editor.getValue());
  outputFrame.close();
}



function toggleMode() {
  var body = document.body;
  var modeBtn = document.getElementById("modeToggle");

  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    modeBtn.textContent = "🌞 Light Mode";
    editor.setOption("theme", "default");
  } else {
    modeBtn.textContent = "🌙 Dark Mode";
    editor.setOption("theme", "monokai");
  }
}
