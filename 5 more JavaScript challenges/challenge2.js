// 2.Do the following two blocks of code result in the same answer? If not, which one would you recommend using and why?
const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber === secondNumber;

console.log(result);

const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber == secondNumber;

console.log(result);

// No, they donot give the same result . The first  block will result  to false while the second  block will result to true.