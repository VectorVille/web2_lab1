let number = prompt("Введите число");

while (number.replace(/\d/g, "").length) {
  number = prompt("Это не число, введите число");
}

let string;
for (let i = 0; i < number; i++) {
  if (i % 2 == 0) string = "buzz";
  else string = "fizz";
  if (i % 5 == 0) string = "fizz buzz";
  console.log(`${i} ${string}`);
}
