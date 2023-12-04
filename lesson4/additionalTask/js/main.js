// ================ 1 ================
let stringFrom = (...a) => {
    let rez = "";

    for (let i in a)
        typeof(a[i]) == "string" ? rez += a[i] + " " : 
        typeof(a[i]) == "boolean" ? rez += a[i] ? "true" + " " : "false" + " " : 
        typeof(a[i]) == "number" ? rez += String(a[i]) + " " : null;
    
    return rez;
}

console.log(stringFrom("I have", 5, "apples", true, 51.6));


// ================ 2 ================
let maxArgument = (...a) => {
    let min = 0;

    for (let i in a) {
       
    }

    // for (let i in a) {
    //     if (typeof(a[i]) == "string") {
    //         if (typeof(max) == "string") {
    //             if (max.length < a[i].length) {
    //                 max = a[i];
    //             }
    //         }
    //     }

    //     // if (typeof(a[i]) == "string")
    //     //     if (max < a[i].length)
    //     //         max = a[i];
    //     // else if (typeof(a[i]) == "boolean")
    //     //     if (max < a[i].length)
    //     //         max = a[i];
    //     // else if (typeof(a[i]) == "number")
    //     //     if (max < a[i].length)
    //     //         max = a[i];
    // }

    return min;
}

console.log(`Максимальное значение: ${maxArgument("I have", 5, "apples", true, 51.6)}`);


// ================ 3 ================
let numbers = (...a) => {
    let quantity = 0;

    for (let i in a)
       typeof(a[i]) == "number" ? quantity++ : null;

    return quantity;
}

console.log(numbers(1, 2, "a"));
console.log(numbers(true, 2, false));
console.log(numbers());


// ================ 4 ================
let mean = (...a) => {
    let counter = 0;
    let rez = 0;

    for (let i in a) {
        if (typeof(a[i]) == "number") {
            counter++;
            rez += a[i];
        }
    }

    return counter == 0 ? 0 : rez / counter;
}

console.log(mean(1, 2, "a"));
console.log(mean(true, 2, false));
console.log(mean());


// ================ 5 ================
let isTheStageOfTheDouble = a => {
    if (a == 1)
        return 1;

    if (a < 1 || a % 2 != 0)
        return 0;
    
    // for(let i = 1; i < a; i++) {
    //     if (a == 2 ** i)
    //         return 1;
    // }
    // return 0;

    return isTheStageOfTheDouble(a / 2);
}

console.log(`${8} - ${isTheStageOfTheDouble(8) ? "Является степенью двойки" : "Не является степенью двойки"}`);
console.log(`${32} - ${isTheStageOfTheDouble(32) ? "Является степенью двойки" : "Не является степенью двойки"}`);
console.log(`${7} - ${isTheStageOfTheDouble(7) ? "Является степенью двойки" : "Не является степенью двойки"}`);
console.log(`${12} - ${isTheStageOfTheDouble(12) ? "Является степенью двойки" : "Не является степенью двойки"}`);


// ================ 6 ================
let printReversNumber = a => {
    // if ()
    //     printReversNumber();
}

printReversNumber(547);