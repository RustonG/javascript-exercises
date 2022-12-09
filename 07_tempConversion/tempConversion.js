const convertToCelsius = function(ftemp) {
  return Number.parseFloat(((ftemp - 32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(ctemp) {
  return Number.parseFloat((ctemp * 9/5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
