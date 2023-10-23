let n = 3;
let x = 1;
let y = 3;

let isDividing;
if (n % x == 0 && n % y == 0) isDividing = true;
else isDividing = false;

console.log(`n = ${n}, x = ${x}, y = ${y} => ${isDividing}`);
