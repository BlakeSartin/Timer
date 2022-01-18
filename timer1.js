const array = process.argv.slice(2);
const alarm = function (array) {
  let compare = (a, b) => {
    return a - b;
  };
  let time = array.sort(compare).filter(num => num > 0)

  for (const t of time) {
    let delay = t * 1000;
    setTimeout(() => {
      process.stdout.write("\x07");
    }, delay);
  }
};

alarm(array);
