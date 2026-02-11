/**
 Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.
 For example, assume the bill has the following prices:bill = [2,4,6] . Anna declines to eat item 2 which costs 6. If Brian calculates the bill correctly, Anna will pay 3. If he includes the cost of 2, he will calculate 6. In the second case, he should refund 3 to Anna.
 */

function bonAppetit(bill, k, b) {
    // sum the bill and exclude the item that Anna did not eat
    const sumBill = bill.reduce((total, num, index) => index !== k ? total + num : total, 0);
    const chargedBill = b;
    // calculate Anna's actual share of the bill
    const actualBill = sumBill / 2

    if (chargedBill === actualBill) { // Brian's calculation is correct
        console.log("Bon Appetit")
    } else { // Brian's calculation is incorrect, calculate the refund amount
        console.log(chargedBill - actualBill)
    }
}

bonAppetit([2, 4, 6], 2, 6)
bonAppetit([3, 10, 2, 9], 1, 12)
bonAppetit([3, 10, 2, 9], 1, 7)