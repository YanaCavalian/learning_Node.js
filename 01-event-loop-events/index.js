const fs = require("fs");

const dns = require("dns");

function timestamp() {
  return performance.now().toFixed(2);
}

console.log("Program start");

//Close events
fs.writeFile("./test.txt", "Hello Node.js", () =>
  console.log("File written", timestamp())
);

//Promises
Promise.resolve().then(() => console.log("Promise 1", timestamp()));

//Next tick
process.nextTick(() => console.log("NextTick 1", timestamp()));

//setImmediate (Check)
setImmediate(() => console.log("Immediate 1", timestamp()));

//Timeouts
setTimeout(() => console.log("Timer 1", timestamp()), 0);
setTimeout(() => {
  process.nextTick(() => console.log("Next tick 2", timestamp()));
  console.log("Timer 2", timestamp());
}, 100);

//Intervals
let intervalCount = 0;
const intervalId = setInterval(() => {
  console.log(`Interval ${(intervalCount += 1)}`, timestamp());
  if (intervalCount === 2) clearInterval(intervalId);
}, 50);

//I/O Events
dns.lookup("localhost", (error, address, family) => {
  console.log("DNS 1 localhost", address, timestamp());
  Promise.resolve().then(() => console.log("Promise 2", timestamp()));
  process.nextTick(() => console.log("Next tick 3", timestamp()));
});

console.log("Program end");

// Program start
// Program end
// NextTick 1 26.77
// Promise 1 27.09
// Timer 1 27.41
// DNS 1 localhost ::1 30.55
// Next tick 3 30.85
// Promise 2 31.09
// Immediate 1 31.49
// File written 32.36
// Interval 1 72.75
// Timer 2 122.98
// Next tick 2 123.12
// Interval 2 123.27
