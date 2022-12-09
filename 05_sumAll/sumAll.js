const sumAll = function(int1, int2) {
  if (!Number.isInteger(int1) || !Number.isInteger(int2)) {
    return 'ERROR';
  } else if (int1 < 0 || int2 < 0) {
    return 'ERROR';
  }
  let sortedInts = Array.of(int1, int2).sort((a, b) => {return a - b;});
  let sum = 0;

  for (let i = sortedInts[0]; i <= sortedInts[1]; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
