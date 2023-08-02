// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined                                         function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
// }


// Correct Code is
function countSheeps(arrayOfSheep) {
    if (!Array.isArray(arrayOfSheep)) {
      throw new Error("Input is not an array.");
    }
  
    let count = 0;
  
    for (const sheep of arrayOfSheep) {
      // Check if the value is defined and a valid boolean (true or false)
      if (typeof sheep === "boolean") {
        // If the value is true (representing a sheep present), increment the count
        if (sheep === true) {
          count++;
        }
      } else if (sheep !== undefined && sheep !== null) {
        // Handle any non-boolean values (e.g., null, NaN, etc.)
        throw new Error("Invalid value in the array: " + sheep);
      }
    }
  
    return count;
  }
  
  // Test the function with the example array
  const sheepArray = [
    true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
  ];
  
  try {
    const sheepCount = countSheeps(sheepArray);
    console.log("Number of sheep present:", sheepCount);
  } catch (error) {
    console.error(error.message);
  }
  