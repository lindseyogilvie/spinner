data1 = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
delay = 100

const spinner = (data) => {
  for(let item in data) {
    setTimeout(() => {
      process.stdout.write(`\r${data[item]} `)
    }, delay += 200);
  }
};

spinner(data1);