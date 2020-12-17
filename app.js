const texts = [
  "Trumpeter",
  "Software Engineer",
  "Aspiring Enterpreneur",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(async function type() {
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 250);
})();
