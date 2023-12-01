function Sum(a, b) {
    return a + b;
}
function Mult(a, b) {
    return a * b;
}

// spraed оператор
function SumSpraed(...spred) {
    let sum = 0;

    for (let i in spred)
        sum += spred[i];

    return sum;
}

// rest оператор
function SumRest(a, b, ...spred) {
    let sum = 0;

    sum = a + b;

    for (let i in spred)
        sum += spred[i];

    return sum;
}