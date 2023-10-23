let a = 3;
let b = 4;
let c = 5;

if (a + b < c || b + c < a || a + c < b) {
  console.log("треугольника не существует");
} else {
  let p = a + b + c;
  let square = Math.sqrt((p / 2) * (p / 2 - a) * (p / 2 - b) * (p / 2 - c));

  console.log("треугольник существует");
  console.log(`Периметр = ${p}`);
  console.log(`Площадь = ${square}`);
  console.log(`Соотношение = ${p / square}`);
}
