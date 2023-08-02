// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.     class SmallestIntegerFinder {
//   findSmallestInt(args) {
    
//   }
// }

class SmallestIntegerFinder {
    findSmallestInt(args) {
      // Initialize the smallest number to the first element of the array
      let smallest = args[0];
  
      // Iterate through the array starting from the second element
      for (let i = 1; i < args.length; i++) {
        // If the current element is smaller than the current smallest, update the smallest
        if (args[i] < smallest) {
          smallest = args[i];
        }
      }
  
      return smallest;
    }
  }
  