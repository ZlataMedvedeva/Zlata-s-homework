function checkElementInArray(arr, element) {
    if (!Array.isArray(arr)) {
        return "Ошибка: аргумент должен быть массивом";
    }

    //1 способ - Проверяем наличие элемента в массиве с помощью метода includes()
    return arr.includes(element);
}

// Пример использования:
const numbers = [1, 2, 3, 4, 5];
console.log(checkElementInArray(numbers, 3)); //true

console.log(checkElementInArray(numbers, 6)); //false

const notAnArray = "not an array";
console.log(checkElementInArray(notAnArray, 1)); //Ошибка: аргумент должен быть массивом