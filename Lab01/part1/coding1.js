// Data 1
let markWeight1 = 78;
let markHeight1 = 1.69;
let johnWeight1 = 92;
let johnHeight1 = 1.95;

let markBMI1 = markWeight1 / (markHeight1 ** 2);
let johnBMI1 = johnWeight1 / (johnHeight1 ** 2);

let markHigherBMI1 = markBMI1 > johnBMI1;

console.log("Data 1:");
console.log("Mark's BMI:", markBMI1);
console.log("John's BMI:", johnBMI1);
console.log("Is Mark's BMI higher than John's BMI?", markHigherBMI1);

// Data 2
let markWeight2 = 95;
let markHeight2 = 1.88;
let johnWeight2 = 85;
let johnHeight2 = 1.76;

let markBMI2 = markWeight2 / (markHeight2 ** 2);
let johnBMI2 = johnWeight2 / (johnHeight2 ** 2);

let markHigherBMI2 = markBMI2 > johnBMI2;

console.log("Data 2:");
console.log("Mark's BMI:", markBMI2);
console.log("John's BMI:", johnBMI2);
console.log("Is Mark's BMI higher than John's BMI?", markHigherBMI2);

//coding 2
console.log("-----------------------coding 2---------------------")
if (markHigherBMI1) {
    console.log(`Mark's BMI (${markBMI1}) is higher than John's BMI (${johnBMI1})!`);
} else {
    console.log(`John's BMI (${johnBMI1}) is higher than Mark's BMI (${markBMI1})!`);
}

if (markHigherBMI2) {
    console.log(`Mark's BMI (${markBMI2}) is higher than John's BMI (${johnBMI2})!`);
} else {
    console.log(`John's BMI (${johnBMI2}) is higher than Mark's BMI (${markBMI2})!`);
}