const numbers = [45, 4, 9, 16, 25];
Array.prototype.myAny = function (num) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] > num) {
            return true;
        }
    }
    return false;
}
const result = numbers.myAny(40);
console.log(result); // true