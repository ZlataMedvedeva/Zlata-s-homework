function sumArrayElements(arr) {
    if (!Array.isArray(arr)) {
        return "Ошибка: аргумент должен быть массивом";
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return "Ошибка: все элементы массива должны быть числами";
        }
        sum += arr[i];
    }
    return sum;
}

// Пример использования:
const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayElements(numbers)); // Выведет: 15

const mixedArray = [1, '2', 3];
console.log(sumArrayElements(mixedArray)); // Выведет: Ошибка: все элементы массива должны быть числами

const notAnArray = "not an array";
console.log(sumArrayElements(notAnArray)); // Выведет: Ошибка: аргумент должен быть массивом