const fs = require("fs"); //импорт встроенного модуля fs (File System).
// Модуль fs предоставляет API для работы с файловой системой,
//позволяя выполнять операции чтения, записи, удаления файлов,
// а также многие другие функции, связанны

let isRunning = true;

//в колбек функции меняет значение isRunning на false
setTimeout(() => (isRunning = false), 100);
process.nextTick(() => console.log("next Tick"));

function setImmediatePromise() {
  return new Promise((resolve, reject) => {
    setImmediate(() => resolve());
    // resolve(); // с этим будет перпрерывный цикл так как до setTimout очередь не дойдет
  });
}

//оборачиваем наш цикл while в асинхронную функцию
async function whileLoop() {
  while (isRunning) {
    console.log("While loop is running...");
    await setImmediatePromise();
  }
}

//когда цикл завершит свою работы то вызовет нам console.log('While loop ended')!
whileLoop().then(() => console.log("While loop ended"));
