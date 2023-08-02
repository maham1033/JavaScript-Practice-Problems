// What does result evaluate to? You might want to review the previous lesson for this one.
const myObj = {
    prop1: 'first value',
    prop2: 20
  };
  
  // Index         0   1   2
  const myArray = [40, 50, 2];
  
  const result = myObj.prop2 === (myArray[0] / myArray[2]);

  /*
myObj.prop2 = 20
myArray[0] = 40
myArray[2] = 2
40 / 2 = 20,  20 === 20 and the result is true.
  */