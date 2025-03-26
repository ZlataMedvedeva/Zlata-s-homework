// Задача 1: getSign
function getSign(num) {
    if (num > 0) {
        return "positive";
    } else if (num < 0) {
        return "negative";
    } else {
        return "zero";
    }
}

// Тесты для getSign
console.log(getSign(10)); // "positive"
console.log(getSign(-5)); // "negative"
console.log(getSign(0));  // "zero"

// Задача 2: max
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
    // Альтернативный вариант: return a > b ? a : b;
}

// Тесты для max
console.log(max(10, 20)); // 20
console.log(max(5, 3));   // 5
console.log(max(7, 7));   // 7

// Задача 3: checkAge
function checkAge(age) {
    if (age < 18) {
        return "Access denied";
    } else if (age >= 18 && age <= 65) {
        return "Access granted";
    } else {
        return "Are you sure?";
    }
}

// Тесты для checkAge
console.log(checkAge(16)); // "Access denied"
console.log(checkAge(25)); // "Access granted"
console.log(checkAge(70)); // "Are you sure?"