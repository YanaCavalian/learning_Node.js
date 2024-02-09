//  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
function info(text) {
  console.log(text, performance.now().toFixed(2));
}

info("program start");

setTimeout(() => info("Timeout"), 0);

function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  let fib1 = 0;
  let fib2 = 1;
  let sum;
  for (let i = 1; i < n; i++) {
    sum = fib1 + fib2;
    fib1 = fib2;
    fib2 = sum;
  }
  return sum;
}

console.log(fib(1000));

info("program end");

//program start 16.46
//4.346655768693743e+208
//program end 19.66
//Timeout 20.47
