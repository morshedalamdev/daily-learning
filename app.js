/**
 Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
 Lily decides to share a contiguous segment of the bar selected such that:
     * The length of the segment matches Ron's birth month, and,
     * The sum of the integers on the squares is equal to his birth day.
 Determine how many ways she can divide the chocolate.
 */

function birthday(s, d, m) {
    let count = 0;
    let i = 0;
    while(i < s.length){ // Loop through the chocolate bar
        let sum = 0;
        for(let j = 0; j < m; j++){ // Loop through the segment of the chocolate bar
            sum += s[i+j] // Add the integer on the square to the sum
        }
        if(sum === d) count++ // If the sum of the integers on the squares is equal to Ron's birth day, increment the count
        i++
    }
    return(count)
}

const result1 = birthday([2, 2, 1, 3, 2], 4, 2);
const result2 = birthday([1, 2, 1, 3, 2], 3, 2);
const result3 = birthday([1, 1, 1, 1, 1, 1], 3, 2);
const result4 = birthday([4], 4, 1);

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)