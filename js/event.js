// Option 1:

// methode: 2 added onclick functon
function makeRed() {
  document.body.style.backgroundColor = "red";
}
// methode 3:

const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option 3: Onather
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};
