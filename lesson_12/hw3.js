const sumNumbers = (numbers) => {
    let sum = 0;
    let word = "Числа: "
    let word2 = ". Сумма: "
    let i =0;
    while (i < numbers.length) {
        word += numbers[i];
        sum += numbers[i];
        if (i!==numbers.length - 1) {
            word += ", ";
        }
        i++;
    }
    word += word2;
    word += sum;
    word += "."
    return word;
}
numbers = [1, 2, 3, 4, 5];
console.log(sumNumbers(numbers)); // Ожидаемый результат: "Числа: 1, 2, 3, 4, 5. Сумма: 15."