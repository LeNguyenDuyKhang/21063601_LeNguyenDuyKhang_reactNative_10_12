function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

const bills = [125, 555, 44];
const tips = bills.map(bill => calcTip(bill));
const total = bills.map((bill, index) => bill + tips[index]);