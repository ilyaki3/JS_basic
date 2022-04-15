// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.


function prime_num(num) {
    let j = 2
    while (j < num) {
        if (num % j == 0) {
            return
        }
        j++
    }
    return num
}

let i = 3,
    num, prime_numbers = [1, 2]

while (i <= 100) {
    num = prime_num(i)
    if (Number.isInteger(num)) {
        prime_numbers.push(num)
    }
    i += 2
}

console.log(prime_numbers)
