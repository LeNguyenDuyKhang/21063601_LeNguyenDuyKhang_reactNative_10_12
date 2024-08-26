// Calculate the tip
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Calculate the total value
const totalValue = bill + tip;

// Print the result
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);