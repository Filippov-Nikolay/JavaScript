// ================ 1 ================
class Car {
    #_manufacturer = "";
    #_model = "";
    #_yearOfRelease = 0;
    #_averageSpeed = 0;

    constructor(manufacturer, model, yearOfRelease, averageSpeed) {
        this.#_manufacturer = manufacturer;
        this.#_model = model;
        this.#_yearOfRelease = yearOfRelease;
        this.#_averageSpeed = averageSpeed;
    }

    show() {
        console.log(`Производитель: ${this.#_manufacturer}`);
        console.log(`Модель: ${this.#_model}`);
        console.log(`Год выпуска: ${this.#_yearOfRelease}`);
        console.log(`Средняя скорость: ${this.#_averageSpeed}`);
    }

    timeToCoverTheDistance(distance, speed) {
        return ((distance / speed) + Math.floor((distance / speed) / 4)).toFixed(2);
    }
}

let car1 = new Car("Audi", "A6", "2011", 211);
let car2 = new Car("Audi", "M235i", "2016", 230);

car1.show();
car2.show();

console.log(`Потребуется ${car1.timeToCoverTheDistance(600, 60)} часов для поездки!`);
console.log(`Потребуется ${car1.timeToCoverTheDistance(600, 90)} часов для поездки!`);



// ================ 2 ================
class fractionObject {
    #_numerator = 0;
    #_denominator = 0;

    constructor(numerator, denominator) {
        this.#_numerator = numerator;
        this.#_denominator = denominator;
    }

    additionOfFractions(a) {
        return (this.#_numerator / this.#_denominator) + (a.numerator / a.denominator);
    }
    subtractionOfFractions(a) {
        return (this.#_numerator / this.#_denominator) - (a.numerator / a.denominator);
    }
    multiplicationOfFractions(a) {
        return (this.#_numerator / this.#_denominator) * (a.numerator / a.denominator);
    }
    divisionOfFractions(a) {
        return (this.#_numerator / this.#_denominator) / (a.numerator / a.denominator);
    }
    reductionOfFractions() {
        for(let i = this.#_denominator; i > 0 ; i--) {
            if (this.#_numerator % i == 0 && this.#_denominator % i == 0)
                return i;
        }
    }

    get numerator() {
        return this.#_numerator;
    }
    get denominator() {
        return this.#_denominator;
    }
}

let fraction1 = new fractionObject(8, 2);
let fraction2 = new fractionObject(6, 3);

console.log(fraction1.additionOfFractions(fraction2));
console.log(fraction1.subtractionOfFractions(fraction2));
console.log(fraction1.multiplicationOfFractions(fraction2));
console.log(fraction1.divisionOfFractions(fraction2));
console.log(fraction1.reductionOfFractions());
console.log(fraction2.reductionOfFractions());



// ================ 3 ================
let getTimeInSeconds = (a, b = 0, c = 0) => { return (Number(a) * 3600) + (Number(b) * 60) + (Number(c)) }

let formatTime = (a, b = 0, c = 0) => {
    a <= 9 ? a = "0" + a : null;
    b <= 9 ? b = "0" + b : null;
    c <= 9 ? c = "0" + c : null;

    return a + ":" + b + ":" + c;
}

let retransmitSecondsInTime = a => {
    let hh = 0;
    let mm = 0;
    let ss = 0;

    hh = parseInt(a / 3600);
    mm = parseInt((a % 3600) / 60);
    ss = parseInt(a % 60);

    return formatTime(hh, mm, ss);
}

class Date {
    #_hh = 0;
    #_mm = 0;
    #_ss = 0;

    constructor(hh = 0, mm = 0, ss = 0) {
        hh <= '9' ? hh = '0' + hh : null;
        mm <= '9' ? mm = '0' + mm : null;
        ss <= '9' ? ss = '0' + ss : null;
    
        this.#_hh = hh;
        this.#_mm = mm;
        this.#_ss = ss;
    }

    showDate() {
        console.log(`${this.#_hh}:${this.#_mm}:${this.#_ss}`);
    }
    addSeconds(ss) {
        let timeinSeconds = getTimeInSeconds(this.#_hh, this.#_mm, this.#_ss);
        timeinSeconds+=ss;
        return retransmitSecondsInTime(timeinSeconds);
    }
    addMinutes(mm) {
        let timeinSeconds = getTimeInSeconds(this.#_hh, this.#_mm, this.#_ss);
        timeinSeconds+=(mm * 60);
        return retransmitSecondsInTime(timeinSeconds);
    }
    addHours(hh) {
        let timeinSeconds = getTimeInSeconds(this.#_hh, this.#_mm, this.#_ss);
        timeinSeconds+=(hh * 3600);
        return retransmitSecondsInTime(timeinSeconds);
    }
}

let date = new Date(5, 9, 1);
let date1 = new Date(10, 4, 0);
let date2 = new Date();

date.showDate();
date1.showDate();
date2.showDate();

console.log(date.addHours(12));
console.log(date1.addMinutes(15));
console.log(date2.addSeconds(1000));