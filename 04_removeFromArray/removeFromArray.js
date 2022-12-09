const removeFromArray = function(arr, ...theArgs) {
  return arr.filter((elem) => {
    return !theArgs.includes(elem);
  });
};

// Do not edit below this line
module.exports = removeFromArray;
