// 1. Функция digitCount(n)
function digitCount(n) {
    return Math.abs(n).toString().length;
}

console.log(digitCount(12345)); // 5
console.log(digitCount(7)); // 1
console.log(digitCount(987654321)); // 9

// 2. Функция reverseNumber(n)
function reverseNumber(n) {
    const str = n.toString();
    const reversedStr = str.split('').reverse().join('');
    return parseFloat(reversedStr) * Math.sign(n);
}

console.log(reverseNumber(12340)); // 4321
console.log(reverseNumber(987.6)); // 6.789
console.log(reverseNumber(1000)); // 1

// 3. Функция factorial(n)
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040