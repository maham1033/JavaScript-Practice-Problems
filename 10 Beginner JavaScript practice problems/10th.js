// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"            function repeatStr (n, s) {
//   return '';
// }
// ChatGPT
// To repeat a string s exactly n times, you can use the repeat method available on JavaScript strings. Here's the implementation of the repeatStr function:

// javascript
// Copy code
// function repeatStr(n, s) {
//   if (n <= 0) {
//     return '';
//   }

//   return s.repeat(n);
// }
// In this function, we first check if n is less than or equal to 0. If it is, we return an empty string, as there is no repetition needed. Otherwise, we use the repeat method of the string s to repeat it exactly n times.

// You can test the function with different inputs like this:

// javascript
// Copy code
// console.log(repeatStr(6, "I")); // Output: "IIIIII"
// console.log(repeatStr(5, "Hello")); // Output: "HelloHello

function repeatStr(n, s) {
    if (n <= 0) {
      return '';
    }
  
    return s.repeat(n);
  }
  
