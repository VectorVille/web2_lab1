let hiddenNumber = 5;

do {
  number = prompt("Введите число");
  while (number.replace(/\d/g, "").length) {
    number = prompt("Это не число, введите число");
  }
  if (number > hiddenNumber) console.log("Ваше число больше");
  else if (number < hiddenNumber) console.log("Ваше число меньше");
} while (number != hiddenNumber);

console.log("Угадано");
