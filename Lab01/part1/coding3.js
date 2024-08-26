// Test data
const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];

// Calculate average score for each team
const calculateAverageScore = (scores) => {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
};

const dolphinsAverageScore = calculateAverageScore(dolphinsScores);
const koalasAverageScore = calculateAverageScore(koalasScores);

// Compare average scores and determine the winner
if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log("Dolphins win the competition!");
} else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
    console.log("Koalas win the competition!");
} else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100) {
    console.log("It's a draw!");
} else {
    console.log("No team wins the trophy.");
}