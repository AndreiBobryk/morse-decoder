const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  MORSE_TABLE[""] = " ";
  let arr = [];

  let arrTemp = [];
  let count = 0;

  for (let i = 0; i < expr.length; i += 2) {
    if (expr.slice(i, i + 2).includes("00")) {
      count++;
    } else if (expr.slice(i, i + 2).includes("10")) {
      arrTemp.push(".");
      count++;
    } else if (expr.slice(i, i + 2).includes("11")) {
      arrTemp.push("-");
      count++;
    } else {
      count++;
    }
    if (count === 5) {
      arr.push(MORSE_TABLE[arrTemp.join("")]);
      arrTemp = [];
      count = 0;
    }
  }

  return arr.join("");
}

module.exports = {
  decode,
};
