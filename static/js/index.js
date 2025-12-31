// Weather App Script

console.log("The weather app is initialised.......");
console.log("Developed by Arav Roy (2910)");

const api = {
  key: "fcc8de7015bbb202209bbf0261babf4c",
  base: "https://api.openweathermap.org/data/2.5/"
}

document.querySelector('#search-form').addEventListener("submit", (e) => {
    e.preventDefault();
    const query = document.querySelector('.search-box').value;
    
    try {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            }).then(
                return weather.json();
                (weather) => {
                        let city = document.querySelector('#city');
                        city.innerText = `${weather.name}, ${weather.sys.country}`;

                        const currentDate = new Date();// Get the date (1-31)
                        const dayOfMonth = currentDate.getDate();

                        // Get the day of the week (0-6, where 0 is Sunday, 6 is Saturday)
                        const dayOfWeek = currentDate.getDay();

                        // Get the month (0-11, where 0 is January, 11 is December)
                        const month = currentDate.getMonth();

                        // Get the full year (e.g., 2024)
                        const year = currentDate.getFullYear();

                        // Get the hour (0-23)
                        const hours = currentDate.getHours();

                        // Get the minutes (0-59)
                        const minutes = currentDate.getMinutes();

                        // Get the seconds (0-59)
                        const seconds = currentDate.getSeconds();

                        document.querySelector('#zone').innerText = `${dayOfWeek} , ${dayOfMonth} ${month} ${year}`;
                        document.querySelector('#time').innerText = `${hours}:${minutes}:${seconds}`;

                        let temp = document.querySelector('#temp');
                        temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

                        let weather_el = document.querySelector('#status');
                        weather_el.innerText = weather.weather[0].main;

                        let hilow = document.querySelector('#range');
                        hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

                }
        )

    } catch (error) {
        console.log(error)

            let city = document.querySelector('#city');
            city.innerText = "City Not Found";

            const currentDate = new Date();// Get the date (1-31)
            const dayOfMonth = currentDate.getDate();

            // Get the day of the week (0-6, where 0 is Sunday, 6 is Saturday)
            const dayOfWeek = currentDate.getDay();

            // Get the month (0-11, where 0 is January, 11 is December)
            const month = currentDate.getMonth();

            // Get the full year (e.g., 2024)
            const year = currentDate.getFullYear();

            // Get the hour (0-23)
            const hours = currentDate.getHours();

            // Get the minutes (0-59)
            const minutes = currentDate.getMinutes();

            // Get the seconds (0-59)
            const seconds = currentDate.getSeconds();

            document.querySelector('#zone').innerText = `${dayOfWeek} , ${dayOfMonth} ${month} ${year}`;
            document.querySelector('#time').innerText = `${hours}:${minutes}:${seconds}`;

            let temp = document.querySelector('#temp');
            temp.innerHTML = "Not found";

            let weather_el = document.querySelector('#status');
            weather_el.innerText = "Not found"
            let hilow = document.querySelector('#range');
            hilow.innerText = "See console for detail";


    } finally {
    // Code that runs regardless of whether an error occurred

    }

});