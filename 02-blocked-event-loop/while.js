let isRunning = true;

// мы не доходим до этого события,так как цикл while неприрывный !
// тоесть цикл событий заблокирован!

setTimeout(() => (isRunning = false), 0);
process.nextTick(() => console.log('next Tick'));

while (isRunning) {
  console.log('While loop is running...');
}
