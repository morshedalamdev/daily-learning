function add(...x) {
     return x.reduce((sum, currVal) => sum + currVal, 0);
}
function multiply(...x) {
     return x.reduce((product, currVal) => product * currVal, 1);
}

/**
 * Memoization function
 * @param {*} fn (function) as input
 * @returns cached version of the function
 */
function memo(fn) {
     // Cache object to store results
     const cache = {};
     return function (...args) {
          // Create a unique key for the arguments
          const key = JSON.stringify(args);
          if (cache[key]) {
               // Return cached result if available
               console.log("Fetching from cache for args:", args);
               return cache[key];
          } else {
               // Compute, cache and return the result
               const result = fn(...args);
               cache[key] = result;
               console.log('Calculating result for args:', args);
               return result;
          }
     }
}

// Create a memoized version of the add function
const calculate = memo(add);
// Create a memoized version of the multiply function
const multiplyMemo = memo(multiply);

// Test cases
console.log(calculate(1, 2, 3, 4)); // 10
console.log(calculate(1, 2, 3, 4)); // 10 (from cache)
console.log(calculate(5, 5));     // 10
console.log(calculate(5, 5));     // 10 (from cache)
console.log(multiplyMemo(2, 3, 4)); // 24
console.log(multiplyMemo(2, 3, 4)); // 24 (from cache)
console.log(multiplyMemo(5, 5));    // 25
console.log(multiplyMemo(5, 5));    // 25 (from cache)