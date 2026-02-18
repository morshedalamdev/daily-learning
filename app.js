/** Problem description **
 * A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return -1.
 * Example
 keyboards = [3,1]
 drives = [5,2,8]
 b = 10
 * The person can buy the 1 keyboard and the 8 USB drive for a total cost of 9, or buy the 3 keyboard and the 5 USB drive for a total cost of 8. Choose the first combination as the most expensive option and return 9.
 */

// Solution
function getMoneySpent(keyboards, drives, b) {
    let spent = 0;
    
    for(let i = 0; i < keyboards.length; i++){
        for(let j = 0; j < drives.length; j++){
            const sum = keyboards[i] + drives[j];
            
            if(b >= sum && sum > spent){
                spent = sum
            }
        }
    }
    return spent > 0 ? spent : -1
}

// Testing
getMoneySpent([40,50,60],[5,8,12],60)
getMoneySpent([3,1],[5,2,8],10)
getMoneySpent([4],[5],5)