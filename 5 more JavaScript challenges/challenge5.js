// What does result evaluate to?
const myObj = {
    nestedObject1: {
      price: 100,
      quantity: 5
    },
    nestedObject2: {
      price: 150,
      quantity: 2
    }
  };
  
  const myArray = [myObj.nestedObject1, myObj.nestedObject2];
  
  const result = (myArray[0].price * myArray[0].quantity) > (myArray[1].price * myArray[1].quantity); 

  /*
myArray[0].price= 100
myArray[0].quantity= 5
myArray[1].price= 150
myArray[1].quantity= 2
100 * 5 > 150 * 2=true
result evaluates to true
  */