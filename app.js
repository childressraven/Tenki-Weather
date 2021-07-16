

const inputValue = document.querySelector('.input');
const searchBtn = document.querySelector('.search');
const container = document.querySelector('.weather-container');
const imgURL = 'https:';

function getData() {
  fetch('https://api.weatherapi.com/v1/forecast.json?key=34a3c51bf4de46eaac6171757210507&q='+inputValue.value+'&days=3&units=metric&aqi=no&alerts=no')
  .then(response => response.json())
  .then(data => {
      weather = data;
      const forecastArray = weather.forecast.forecastday;
    
      console.log(forecastArray)
    
      forecastArray.forEach(item => {
        Object.keys(item);
        const weatherEl = document.createElement('div');
        weatherEl.classList.add('weather-day');
        weatherEl.innerHTML = `
            <img src="${imgURL + item.day.condition.icon}"/>
            <h1 class="city-date">${item.date}</h1>
            <h1 class="temp">${Math.floor(item.day.maxtemp_f)}<span>°f</span></h1>
            <p class="condition">${item.day.condition.text}</p>
        `
        container.appendChild(weatherEl);
      });
  }); 
}




searchBtn.addEventListener('click', getData)
