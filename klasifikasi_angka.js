const prompt = require("prompt-sync")();
const number = Number(prompt("Masukin nilai nya: "));

if (number < 10) {
  console.log(`${number} Itu adalah nilai satuan`);
} else if (number < 100) {
  console.log(`${number} Itu adalah nilai puluhan`);
} else if (number < 1000) {
  console.log(`${number} Itu adalah nilai ratusan`);
} else {
  console.log(`${number}`);
}
