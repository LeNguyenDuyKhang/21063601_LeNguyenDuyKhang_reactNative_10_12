// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2. Use the function to calculate the average for both teams
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

// 3. Create a function 'checkWinner' to determine the winner
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins!");
    }
};

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
console.log("Data 1:");
checkWinner(avgDolphins, avgKoalas);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

console.log("Data 2:");
checkWinner(avgDolphins2, avgKoalas2);