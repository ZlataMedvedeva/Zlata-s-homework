function checkElementInArray(arr, element) {
    if (!Array.isArray(arr)) {
        return "Ошибка: аргумент должен быть массивом";
    }

    // 2 способ - Перебираем элементы массива с помощью цикла for
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}

// Пример использования:
const numbers = [1, 2, 3, 4, 5];
console.log(checkElementInArray(numbers, 3)); //true

console.log(checkElementInArray(numbers, 6)); //false

const notAnArray = "not an array";
console.log(checkElementInArray(notAnArray, 1)); //Ошибка: аргумент должен быть массивом