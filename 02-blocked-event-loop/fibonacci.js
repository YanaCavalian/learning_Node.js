//  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
//  0, 1, 2, 3, 4, 5, 6, 7 ,8, 9, 10 индексы

setTimeout(() => console.log("Timeout"), 0);

// Рекурсивная функция для вычесления фибоначи
// мы блокируем цикл событий
//RangeError: Maximum call stack size exceeded
function fib(n) {
  // в функцию передаем параметром индекс в нашем случае это n
  if (n === 0 || n === 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(40));
