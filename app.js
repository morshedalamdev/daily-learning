/**
 An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps steps, for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:
 *   A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
 *   A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
 Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
 Example
     steps = 8 path = 'UDDDUDUU'
 The hiker first enters a valley 2 units deep. Then they climb out and up onto a mountain 2 units high. Finally, they return to sea level and end the hike. The hiker walked through 1 valley.
*/

function countingValleys(steps, path) {
    let altitude = 0;
    let valley = 0;
    for (const step of path){
        if(step === "D"){
            altitude--
        }else{
            if(altitude < 0 && altitude + 1 === 0){
                valley++
            }
            altitude++
        }
    }
    console.log(valley)
}

countingValleys(8, 'DDUUUUDD');
countingValleys(8, 'UDDDUDUU');
countingValleys(10, 'UDUDDDUUUD');
countingValleys(12, 'DDUUDDUDUUUD');