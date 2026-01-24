const color = "#2A242B";
// Hexadecimal color code regex
const regexColor = /#?([\d-fA-F]{2}){3}/g;

const matchesColor = color.match(regexColor); // returns an array of all matches
const indexColor = color.search(regexColor); // returns the index of the first match
const replacedColor = color.replace(regexColor, "color"); // replaces matches with "color"
const testingColor = regexColor.test(color); // returns true if there's a match

console.log("Color:", { matchesColor, indexColor, replacedColor, testingColor });


const phone = "+88-01234567899";
// Bangladeshi phone number regex
const phoneRegex = /\+?(88)?-?01[1-9]\d{8}/g;

const matchesPhone = phone.match(phoneRegex); // returns an array of all matches
const indexPhone = phone.search(phoneRegex); // returns the index of the first match
const replacedPhone = phone.replace(phoneRegex, "phone"); // replaces matches with "phone"
const testingPhone = phoneRegex.test(phone); // returns true if there's a match

console.log("Phone:", { matchesPhone, indexPhone, replacedPhone, testingPhone });