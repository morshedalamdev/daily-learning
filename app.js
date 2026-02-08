/**
 Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
 Example
 arr = [1,1,2,2,3]
 There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.
 */

function migratoryBirds(arr) {
     // create an object to count the frequency of each bird type
    const countObj = arr.reduce((acc, num)=>{
        acc[num] = (acc[num] || 0) + 1;
        return acc
    },{})
    
    let mostFrqType = "";
    let mostFrqValue = 0;
    for(let type in countObj){ // loop through the counted object
        if(countObj[type] > mostFrqValue){ // if the current type has higher frequency than the most frequent value, update the most frequent type and value
            mostFrqValue = countObj[type];
            mostFrqType = type
        }
    }
    return parseInt(mostFrqType)
}

const result1 = migratoryBirds([1,1,2,2,3])
const result2 = migratoryBirds([1,4,4,4,5,3])
const result3 = migratoryBirds([1,2,3,4,5,4,3,2,1,3,4])

console.log(result1);
console.log(result2);
console.log(result3);