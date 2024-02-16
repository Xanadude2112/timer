const alarmClock = (timeVal) => {
    const validTimes = timeVal.map(Number).filter(n => !isNaN(n) && n >= 0);
    validTimes.sort((a, b) => a - b);
    validTimes.forEach(number => {
      setTimeout(() => {
        process.stdout.write(`${number} second alarm\n`);
        process.stdout.write('\x07');
      },number * 1000)
  });
}
alarmClock(process.argv.slice(2));