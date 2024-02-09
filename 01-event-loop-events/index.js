const fs = require('fs');

const dns = require('dns');

function info(text) {
  console.log(text, performance.now().toFixed(2));
}

console.log('Program start');

//Close events
fs.writeFile('./test.txt', 'Hello Node.js', () => info('File written'));

//Promises
Promise.resolve().then(() => info('Promise 1'));

//Next tick
process.nextTick(() => info('NextTick 1'));

//setImmediate (Check)
setImmediate(() => info('Immediate 1'));

//Timeouts
setTimeout(() => info('Timer 1'), 0);
setTimeout(() => {
  process.nextTick(() => info('Next tick 2'));
  info('Timer 2');
}, 100);

//Intervals
let intervalCount = 0;
const intervalId = setInterval(() => {
  info(`Interval ${(intervalCount += 1)}`);
  if (intervalCount === 2) clearInterval(intervalId);
}, 50);

//I/O Events
dns.lookup('localhost', (error, address, family) => {
  info('DNS 1 localhost', address);
  Promise.resolve().then(() => info('Promise 2'));
  process.nextTick(() => info('Next tick 3'));
});

console.log('Program end');

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
