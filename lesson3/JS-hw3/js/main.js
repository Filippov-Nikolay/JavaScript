// ================ 1 ================
let getSign = (a, b) => { return a < b ? -1 : a > b ? 1 : 0; }

console.log(getSign(2, 5));
console.log(getSign(5, 2));
console.log(getSign(2, 2));


// ================ 2 ================
let factorial = a => { return a != 1 ? a *= factorial(a - 1) : a; }
let a = 5;

console.log(`Факториал числа: ${a} = ${factorial(a)}`);


// ================ 3 ================
let combineNumbersToString = (a, b, c) => { return String(a) + String(b) + String(c); }

console.log(combineNumbersToString(1, 4, 9));


// ================ 4 ================
let calculateArea = (a, b = a) => { return a * b; }

console.log(`Площадь: ${calculateArea(5, 10)}`);
console.log(`Площадь: ${calculateArea(5)}`);


// ================ 5 ================
let isPerfectNumber = a => { //? Сократить
    let sum = 0;

    for(let i = 0; i < a; i++)
        a % i == 0 ? sum += i : null;

    return sum == a ? 1 : 0;
}

a = 28;
if (isPerfectNumber(a))
    console.log(`Число ${a} является совершенным числом!`);
else
    console.log(`Число ${a} не является совершенным числом!`);

a = 27;
if (isPerfectNumber(a))
    console.log(`Число ${a} является совершенным числом!`);
else
    console.log(`Число ${a} не является совершенным числом!`);


// ================ 6 ================
let findPerfectNumbersInRange = (a, b) => {
    for (let i = a; i <= b; i++)
        isPerfectNumber(i) ? console.log(`Число ${i} является совершенным!`) : null;
}

findPerfectNumbersInRange(0, 1000);


// ================ 7 ================
let formatTime = (a, b = 0, c = 0) => {
    a <= 9 ? a = "0" + a : null;
    b <= 9 ? b = "0" + b : null;
    c <= 9 ? c = "0" + c : null;

    return a + ":" + b + ":" + c;
}
console.log(formatTime(3, 8, 1));
console.log(formatTime(25, 10, 15));
console.log(formatTime(3));


// ================ 8 ================
let getTimeInSeconds = (a, b = 0, c = 0) => { return (a * 3600) + (b * 60) + (c) }

console.log(getTimeInSeconds(3, 8, 1));
console.log(getTimeInSeconds(25, 10, 15));


// ================ 9 ================
let retransmitSecondsInTime = a => {
    let hh = 0;
    let mm = 0;
    let ss = 0;

    hh = parseInt(a / 3600);
    mm = parseInt((a % 3600) / 60);
    ss = parseInt(a % 60);

    return formatTime(hh, mm, ss);
}

console.log(retransmitSecondsInTime(11281));
console.log(retransmitSecondsInTime(90615));


// ================ 10 ================
let theDifferenceBetweenDates = (a, b, c, a1, b1, c1) => {
    return retransmitSecondsInTime(getTimeInSeconds(a, b, c) - getTimeInSeconds(a1, b1, c1));
}

console.log(theDifferenceBetweenDates(25, 10, 15, 3, 8, 1));