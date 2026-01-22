function hourglassSum(arr) {
    // Initialize with smallest possible value to handle all negative numbers
    let maxSum = -Infinity;
    
    // Calculate how many hourglass positions exist
    const maxRow = arr.length - 2;     // Need 3 rows
    const maxCol = arr[0].length - 2;  // Need 3 columns
    
    // Iterate through each possible hourglass position
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            // Calculate sum of hourglass at position (i, j)
            // Pattern: 
            //   a b c
            //     d
            //   e f g
            const currentSum = 
                arr[i][j]     + arr[i][j+1]   + arr[i][j+2] +     // a + b + c
                                arr[i+1][j+1]                  +   // d
                arr[i+2][j]   + arr[i+2][j+1] + arr[i+2][j+2];   // e + f + g
            
            // Update maximum if current sum is larger
               maxSum = Math.max(maxSum, currentSum);
          }
     }
     return maxSum;
}


const arr = [
     [-9, -9, -9, 1, 1, 1],
     [0, -9, 0, 4, 3, 2],
     [-9, -9, -9, 1, 2, 3],
     [0, 0, 8, 6, 6, 0],
     [0, 0, 0, -2, 0, 0],
     [0, 0, 1, 2, 4, 0]
];



const result = hourglassSum(arr);
console.log(result);