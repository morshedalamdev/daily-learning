/**
 Given an array of integers and a positive integer k, determine the number of (i, j) pairs where i < j and (ar[i] + ar[j]) is divisible by k.
 Example
     ar = [1, 2, 3, 4, 5, 6]
     k = 5
 Three pairs meet the criteria: [1,4], [2,3], and [4,6].
 */

function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for(let i = 0; i < n; i++){ // the first number of the pair
        const x = ar[i];
        for(let j = i+1; j < n; j++){ // the second number of the pair
            const y = ar[j]
            const division = (x + y) % k; // if sum of the pair is divisible by k, the division will be 0
            if(division === 0) count++
        }
    }
    return count
}

const result1 = divisibleSumPairs(6,3, [1,3,2,6,1,2])
const result2 = divisibleSumPairs(6,5, [1,2,3,4,5,6])

console.log(result1);
console.log(result2);