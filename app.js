function gradingStudents(grades) {
     let roundGrades = [];
     // Iterate through each grade
     for (let i = 0; i < grades.length; i++) {
          const grade = grades[i];
          // Check if grade is 38 or higher
          if (grade >= 38) {
               // Find the next multiple of 5
               for (let rounded = 40; rounded <= 100; rounded += 5) {
                    // Calculate the difference between the grade and the next multiple of 5
                    const nextMultiple = grade - rounded;
                    //  If the difference is less than 3, round up to the next multiple of 5
                    if (nextMultiple < 1) {
                         // If the difference is greater than -3, round the grade
                         nextMultiple > -3 ? roundGrades.push(rounded) : roundGrades.push(grade);
                         // Break the loop once the rounding decision is made
                         break;
                    }
               }
          } else {
               // If grade is less than 38, no rounding occurs as the result will still be a failing grade
               roundGrades.push(grade);
          }
     }
     return (roundGrades)
}

// Example usage:
const grades = [73, 67, 38, 33];
const result = gradingStudents(grades);
console.log(result);
/*   Output: [75, 67, 40, 33] Students receive a grade in the range 0-100. 
     Any grade less than 40 is a failing grade. 
     If the difference between the grade and the next multiple of 5 is less than 3, round up to the next multiple of 5. 
     If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
*/