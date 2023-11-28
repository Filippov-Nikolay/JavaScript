function example1() {
    let a = 15;

    console.log(`Ваш возраст - ${a}`);
}
function example2() {
    let a;
    let b = a ?? "Hello world";

    console.log(b); // Hello world
}
function example3() {
    let a = 10;
    let b = a ?? "Hello world";

    console.log(b); // 10
}
function example4() {
    let a = prompt("Введите данные: ");
    console.log(a);
}
function example5() {
    let a = confirm("Вы уверенны...?");
    console.log(a);
}
function example6() {
    alert("Hello wolrd");
}
function example7() {
    let a = "10";
    let b = 10;
    if (a === b) {
        console.log(true);
    } else {
        console.log(false);
    }
}