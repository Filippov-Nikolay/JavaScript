window.addEventListener('DOMContentLoaded', () => {
    Weather();
});

let cityName = document.forms[0];
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    if (cityName.elements[0].value != '') {
        Weather(cityName.elements[0].value);
    }
});

function Weather(cityName = 'Odesa') {
    // Замените 'YOUR_API_KEY' на ваш собственный API-ключ OpenWeatherMap
    const apiKey = 'd77e8a80bfcc7551c3135a39d716ce92';

    // Замените 'CITY_NAME' на название города, для которого вы хотите получить прогноз погоды
    const city = cityName;
    const weatherElement = document.getElementById('weather');
    const iconw = document.getElementById('img');
    const cit = document.getElementById('city');
    weatherElement.innerHTML = `${city}`;
    // // Формируем URL для запроса к API OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Отправляем GET-запрос к API
    fetch(url).then((response) => response.json()).then((data) => {
        weatherElement.innerHTML = `${city}`;
        const temperature = data.main.temp;
        const ct = data; // весь объект - результат
        console.log(ct);
        const description = data.weather[0].description;
        const icn = data.weather[0].icon;

        const getTime = new Date(data.sys.sunset);
        const fullTime = `${getTime.getHours()}:${getTime.getMinutes()}:${getTime.getSeconds()}`;
        console.log(fullTime);
        

        console.log(data.name);
        cit.innerText = data.name;

        const maxTemp = data.main.temp_max;
        const minTemp = data.main.temp_min;
        const humidity = data.main.humidity;

        iconw.src = `https://openweathermap.org/img/wn/${icn}.png`
        weatherElement.innerHTML = `
        Текущая температура: ${temperature}°C
        <br><br>
        Описание: ${description}
        <br>
        Закат: ${fullTime}
        <br><br>
        Макс. температура: ${maxTemp}°C
        <br>
        Мин. температура: ${minTemp}°C
        <br><br>
        Влажность: ${humidity}
        `;
    }).catch((error) => {
        console.error('Произошла ошибка:', error);
    });
}