function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) { // O(n)
    const secondNumber = target - array[i];
    for (let j = i + 1; j < array.length; j++) { // O(n)
      if (array[j] === secondNumber) return true;
    }
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  Runtime: O(n^2)
*/

/* 
  Add your pseudocode here
  
  use two nested loop, for each element of the first loop it's 
  copmared with the rest element 
  
  if the secondNumber is in the array:
  return true
*/

/*
  Add written explanation of your solution here
  For each element at index i, it calculates the secondNumber by subtracting the current array element from the target.The inner loop (indexed by j) starts from the next element after i and iterates through the remaining elements of the array.
  Within the inner loop, it checks if the current element at index j is equal to the calculated secondNumber. If true, it means a pair is found, and the function returns true.if not return false 'there is no pairs equal to the target '
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 2, 7, 4], 6));
}

module.exports = hasTargetSum;
