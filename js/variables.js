let x, y, z;

x = 10;
y = '10';
z = 30;

console.log(`x is ${typeof x}`);
console.log(`y is ${typeof y}`);
console.log(`z is ${typeof z}`);

var newX = x++;

console.log(`newX is ${typeof newX}`);

x = y;
console.log(`x = y is ${typeof x==y}`);
console.log(`x is ${x}`);

let timeInMS = Date.now();
console.log(`timeInMS is ${timeInMS}`);
let timeInSec = Date.now() / 1000;
console.log(`timeInSec is ${timeInSec} seconds`);
