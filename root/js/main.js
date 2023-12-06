// Подсветка кода
let code = document.querySelectorAll(".example-code code");
for(let i = 0; i < code.length; i++) {
    let temp = code[i].innerHTML;
    let nameVar = "";

    console.log(temp.indexOf("="));
    console.log(temp.indexOf("let"));

    for (let j = temp.indexOf("let") + 4; j < temp.indexOf("=") - 1; j++) {
        nameVar += temp[j];
    }

    console.log(nameVar);
    console.log(temp);

    temp = temp.replace(/let/g, "<span class='variable'>let</span>")
    .replace(/nameVar/g, `<span class='variable-name'>${nameVar}</span>`)
    .replace(/if/g, "<span class='operator'>if</span>")
    .replace(/console/g, "<span class='object'>console</span>")
    .replace(/log/g, "<span class='method'>log</span>");

    code[i].innerHTML = temp;

    console.log(temp);
}