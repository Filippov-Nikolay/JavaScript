// ================ 1 ================
class ExtendedDate extends Date {
    #_date = this.getDate();
    #_month = this.getMonth();

    printData() {
        document.write(`Текущая дата: ${this.#_date}.${this.#_month}`);
    }
    isTheDatePast(date) {
        let currentDate = this.#_date + this.#_month;

        date = date.split('.');
        date = Number(date[0]) + Number(date[1]);

        console.log(date, currentDate);
        
        return date > currentDate ? 1 : date < currentDate ? -1 : 0;
    }
    isALeapYear(year) {
        return year % 4 == 0 ? 1 : 0;
    }
    nextDate(date) {
        date = date.split('.');

        if (date[0] < 31)
            date[0]++;
        else {
            date[0] = 1;

            if (date[1] < 12)
                date[1]++;
            else
                date[1] = 1;
        }

        return date.join('.');
    }
}

let _date = new Date();
let newDate = _date;


let date = new ExtendedDate();
date.printData();


newDate.setDate(newDate.getDate() - 2);
newDate = newDate.getDate() + "." + newDate.getMonth();


let rez = date.isTheDatePast(newDate);
console.log(`${newDate} - это ${rez == 1 ? "будущая" : 
rez == -1 ? "прошлая" : "текущая"} дата`);


let year = 2023;
console.log(`${year} - ${date.isALeapYear(year) == 1 ? "высокосный" : 
"не высокосный"} год`);

console.log(`${newDate} - следующая дата: ${date.nextDate(newDate)}`);



// ================ 2 ================
class Marker {
    #_colorMarker;
    #_theAmountInkInMarker;

    print(line) {
        
    }
}