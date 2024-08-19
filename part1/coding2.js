// Calculate BMI for Mark
let markMass = 78; // Mark's weight in kilograms
let markHeight = 1.69; // Mark's height in meters
let markBMI = markMass / (markHeight ** 2);

// Calculate BMI for John
let johnMass = 92; // John's weight in kilograms
let johnHeight = 1.95; // John's height in meters
let johnBMI = johnMass / (johnHeight ** 2);

// Compare the BMIs and print the output
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else if (johnBMI > markBMI) {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
} else {
    console.log("Both Mark and John have the same BMI!");
}