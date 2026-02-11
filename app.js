/**
 There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
 Example
 n = 7
 ar = [1,2,1,2,1,3,2]
 There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.
 */

function sockMerchant(n, ar) {
     // counting the frequency of each sock color
     const frequency = ar.reduce((acc, num) => {
          acc[num] = (acc[num] || 0) + 1;
          return acc;
     }, {})

     let count = 0;
     //     loop through each color
     for (let pair in frequency) {
          // add the number of pairs for that color to the count
          count += parseInt(frequency[pair] / 2)
     }
     return count;
}

const result0 = sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]);
const result1 = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);