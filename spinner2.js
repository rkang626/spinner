const characters = ['|', '/', '-', '\\'];
let timer = 0;
const timerIncrement = 200;
const cycles = 4;

for (i = 0; i < cycles; i++) {
  for (const character of characters) {
    timer += timerIncrement;
    setTimeout(() => {
      process.stdout.write(`\r${character}   `);
    }, timer);
  }
}

setTimeout(() => {
  process.stdout.write('\n');
}, timer + timerIncrement);