//a function validator to check if the input(str) is a right input
const validText = str => {
  return typeof str === 'string' && str.trim().length > 0;
}

const validDate = date => {
  return typeof date === 'date';
}

const validNumber = num => {
  return typeof num === 'number';
}

module.exports = {
  validText,
  validDate,
  validNumber
}