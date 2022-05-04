const api = {
    key: `43e4ef2f61e5d0e3a88e7dd752e47444`,
    url:`https://api.openweathermap.org/data/2.5/weather`
}

const displayCard= document.getElementById(`displayCard`);
const loca = document.getElementById(`weatherLocation`);
const description = document.getElementById(`weatherDescription`);
const Range = document.getElementById(`weatherRange`);
const humidity = document.getElementById(`weatherHumidity`);
const wind = document.getElementById(`weatherWind`);

async function searchWeather(query){
    try{
        const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&units=metric`);
         const data = await response.json();
         console.log(data);
         displayCard.style.display = `block`;
         Range.style.color =  `red`;
         loca.innerHTML = `${data.name}. ${data.sys.country}`;
         description.innerHTML = [data.weather[0].description];
         Range.innerHTML = `Range <br>` + `${data.main.temp_min}°F /${data.main.temp_max}°F`;
         humidity.innerHTML = `Humidity ` + data.main.temp + `C`;
         wind.innerHTML = `Wind: ` + data.wind.speed + `Km/h `;
    }
    catch(err){
        console.log(err);
        alert(`City ​​not recognized, please enter a valid city`);
        displayCard.style.display = `none`;
        document.getElementById(`city`).value = '';
        document.getElementById(`city`).focus();

    }
}

function onsubmit(e){
    e.preventDefault();
    searchWeather(city.value);
}

const changebtn = document.getElementById(`w-change-btn`);
const city = document.getElementById(`city`);
changebtn.addEventListener('click',onsubmit,true);