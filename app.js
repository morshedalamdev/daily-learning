/**
 Maria plays college basketball and wants to go pro. Each season she maintains a record of her play.
 She tabulates the number of times she breaks her season record for most points and least points in a game.
 Points scored in the first game establish her record for the season, and she begins counting from there.
 */

function breakingRecords(scores) {
     let max = scores[0];
     let min = scores[0];
     let maxCount = 0;
     let minCount = 0;

     for (let i = 0; i < scores.length; i++) { // Loop through the scores array
          const currVal = scores[i];
          // If the current score is greater than the max, update max and increment maxCount
          if (max < currVal) {
               max = currVal;
               maxCount++;
          }
          // If the current score is less than the min, update min and increment minCount
          if (min > currVal) {
               min = currVal;
               minCount++;
          }
     }
     return ([maxCount, minCount])
}

const result1 = breakingRecords([12, 24, 10, 24]);
const result2 = breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
const result3 = breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);

console.log(result1)
console.log(result2)
console.log(result3)