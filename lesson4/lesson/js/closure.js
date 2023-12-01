// Лексическое окружение в JS

function Func1() { // Внешняя функция
    let f1 = 0;

    function Func2() { // Вложенная функция
        let f2 = 1;
        f1++;
        console.log(f1);
    }

    Func2();
}

Func1();
Func1();
Func1();

let display = () => document.write("Стрелочная функция в JavaScript" + "<br />");
display();

let Display = function () {
    document.write("Стрелочная функция в JavaScript" + "<br />");
}
Display();

// функциональное выражение
let cube = number => number * number * number;
document.write(cube(3) +"<br><br>");

let Cube = function (number) {
    return number * number * number;
}
document.write(Cube(3) +"<br><br>");
