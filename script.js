
function showdata(data, forecast, air_quality, date) {
  document.querySelector(".left-frame").innerHTML = ``;
  document.querySelector(".right-frame").innerHTML = ``;
  document.querySelector(".left-frame").innerHTML = `
  <div class="left-content-upper h-131 p-1 flex flex-col items-center justify-center gap-5  border-b-3 border-gray-500">
          <img src="${fetch_img(data)}" alt="weather Status" class="weather-main-image w-79 h-79" id="weather_img">
          <div class="temprature-div text-white text-8xl flex items-center justify-center font-bold">
            <h1 id="temp">${Math.round(data.main.temp)}</h1><sup class="text-5xl">℃</sup>
          </div>
          <div class="date-day-info my-1 py-1 px-4 h-19 w-full flex justify-between items-center">
            <div id="city" class="text-3xl">${data.name}</div>
            <div id="day" class="text-3xl">${date.toLocaleDateString("en-US", { weekday: 'long' })}</div>
        </div>

        </div>
        <div class="minorinfo my-5">
          <div id="weather" class="flex gap-3"><img src="./utilities/water.svg" alt="Temperature" class="h-6 w-6"><h3>${data.weather[0].main}</h3></div>
          <div id="mintemp" class="flex gap-3"><img src="./utilities/min_temp.svg" alt="Temperature" class="h-6 w-6"><h3>Min Temperature - ${Math.round(data.main.temp_min)}℃</h3></div>
          <div id="maxtemp" class="flex gap-3"><img src="./utilities/max_temp.svg" alt="Temperature" class="h-6 w-6"><h3>Max Temperature - ${Math.round(data.main.temp_max)}℃</h3></div>
        </div>
        <div class="addinfo p-2 flex justify-between bg-black rounded-2xl">
          <div class="humidity flex gap-2">
            <img src="./utilities/water.svg" alt="humidity" class="h-11 w-11">
            <div class="addinfo-div flex flex-col justify-center">
              <h3>${data.main.humidity}%</h3>
            <p>Humidity</p>
          </div>
          </div>
          <div class="wind flex gap-2">
            <img src="./utilities/Wind_speed.svg" alt="wind speed" class="h-11 w-11">
            <div class="addinfo-div flex flex-col justify-center">
              <h3>${(data.wind.speed * 3.6).toFixed(2)} km/h</h3>
            <p>Wind Speed</p>
          </div>
          </div>
        </div>`;

  document.querySelector(".right-frame").innerHTML = ` <div class="nav my-3 px-10 text-2xl underline decoration-white decoration-wavy">Week

        </div>

        <div class="week_forecast flex justify-evenly items-center" id="next-day-forecast">
          
        </div>

        <div class="overview-header my-10 px-3 text-2xl">Today's Overview</div>
        <div class="overview flex justify-around">
          <div class="overview-sec h-55 w-67 flex flex-col gap-4 bg-gray-950 rounded-2xl p-5">
            <p class="text-[17px]">Air Quality Index</p>
            <div class="h-full flex justify-between">
            <div class="flex flex-col gap-5">
            <h1 class="text-5xl">${air_quality.list[0].main.aqi}</h1>
            <h2 id="aqi_status" class="text-2xl" >${aqi_check(air_quality.list[0].main.aqi)}</h2>
          </div>
          <div class="overview-img flex justify-end items-end">
            <img src="./utilities/air_quality.svg" alt="¯\_(ツ)_/¯">
          </div>
            </div>
          </div>
          
          <div class="overview-sec h-55 w-67 flex flex-col gap-4 bg-gray-950 rounded-2xl p-5">
            <p class="text-[17px]">Feels Like</p>
            <div class="h-full flex justify-between">
            <div class="flex flex-col gap-5">
            <h1 class="text-5xl">${Math.round((data.main.feels_like))} <sup>℃</sup></h1>
          </div>
          <div class="overview-img flex justify-end items-end">
            <img class="h-[70px]" src="./utilities/min_temp.svg" alt="¯\_(ツ)_/¯">
          </div>
            </div>
          </div>  

          <div class="overview-sec h-55 w-67 flex flex-col gap-4 bg-gray-950 rounded-2xl p-5">
            <p class="text-[17px]">Pressure (hpa)</p>
            <div class="h-full flex justify-between">
            <div class="flex flex-col gap-5">
            <h1 class="text-5xl">${data.main.pressure}</h1>
            <h2>${data.main.pressure > 1013 ? "High" : "Normal"}</h2>
          </div>
          <div class="overview-img flex justify-end items-end">
            <img class="h-[70px]" src="./utilities/pressure.svg" alt="¯\_(ツ)_/¯">
          </div>
            </div>
          </div>

          </div>
          <div class="bottom_overview my-5 p-4 flex justify-between items-center">
            <div class="precipitation w-2/3 ">
               <div class="bg-gray-950 rounded-2xl shadow-lg p-6 md:p-8">
    <h2 class="text-xl font-bold text-[#EEEEEE] mb-4">Precipitation</h2>
    <div class="relative">
        <svg viewBox="0 0 600 200" class="w-full h-auto" id="precipitationChart">
            <defs>
                <linearGradient id="precipitationGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="gray" stop-opacity="0.3" />
                    <stop offset="100%" stop-color="gray" stop-opacity="0" />
                </linearGradient>
            </defs>

            <line x1="0" y1="10" x2="600" y2="10" stroke="#393E46" stroke-width="1" stroke-dasharray="4 4" />
            <line x1="0" y1="40" x2="600" y2="40" stroke="#393E46" stroke-width="1" stroke-dasharray="4 4" />
            <line x1="0" y1="75" x2="600" y2="75" stroke="#393E46" stroke-width="1" stroke-dasharray="4 4" />
            <line x1="0" y1="110" x2="600" y2="110" stroke="#393E46" stroke-width="1" stroke-dasharray="4 4" />
            <line x1="0" y1="140" x2="600" y2="140" stroke="#393E46" stroke-width="1" stroke-dasharray="4 4" />
            <line x1="0" y1="165" x2="600" y2="165" stroke="#393E46" stroke-width="1" stroke-dasharray="4 4" />

            <path id="precipitationLine" d="M20,180" stroke="gray" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

            <path id="precipitationArea" d="M20,180 L560,180" fill="url(#precipitationGradient)" />

        </svg>

        <div id="chart-row" class="absolute bottom-[-20px] left-0 w-full flex justify-between text-xs text-[#EEEEEE] px-2 pl-4">
            
        </div>

        <div class="absolute top-[-15px] left-[-15px] h-full flex flex-col justify-between text-xs text-[#EEEEEE] py-2">
            <span class="chart-axis">10 mm</span>
            <span class="">8 mm</span>
            <span class="chart-axis">6 mm</span>
            <span class="chart-axis">4 mm</span>
            <span class="chart-axis">2 mm</span>
            <span class="chart-axis">0 mm</span>
        </div>
    </div>
</div>
            </div>

            <div class="sunrise-sunset w-1/4 h-full flex flex-col gap-3 rounded-2xl bg-gray-950 px-5 py-4">
              <div>Sunrise & Sunset</div>
              <div class="sun-inner-div">
              <div class="h-16 flex gap-2 justify-center">
                <div class="sun-img"><img src="./utilities/sunrise.svg" alt="sun" class="h-12 w-12"></div>
                <div>
                  <p class="text-xs text-gray-500">Sunrise</p>
                  <h3 class="text-lg">${new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</h3>
                </div>
              </div>
              <div class="h-16 flex gap-2 justify-center">
                <div class="sun-img"><img src="./utilities/sunset.svg" alt="sun" class="h-12 w-12"></div>
                <div>
                  <p class="text-xs text-gray-500">Sunset</p>
                  <h3 class="text-lg">${new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</h3>
                </div>
                </div>
              </div>
              
            </div>
          </div>`
}



async function fetchWeatherData(city) {
  const [weather_api, forecast_api] = await Promise.all([
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=89bc2e31a4258071828b93eaa4d8fbd5&units=metric`),
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=89bc2e31a4258071828b93eaa4d8fbd5&units=metric`)
  ]);
  const response = await weather_api.json();
  const forecast_response = await forecast_api.json();

  let lat = response.coord.lat;
  let lon = response.coord.lon;

  const air_quality_api = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=89bc2e31a4258071828b93eaa4d8fbd5`);
  const air_quality_response = await air_quality_api.json();
  const date = new Date(Date.now() + response.timezone * 1000);
  showdata(response, forecast_response, air_quality_response, date);
  fetchChartData(forecast_response);
  nexttime(forecast_response)
  nextday(forecast_response)

}

const searchbar = document.getElementById("searchbar");
searchbar.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let city = searchbar.value;
    fetchWeatherData(city);
  }
});

function fetch_img(api) {
  if (api) {
    const nowUTC = Math.floor(Date.now() / 1000);
    const localTime = nowUTC + api.timezone;
    const sunrise = api.sys.sunrise;
    const sunset = api.sys.sunset;
    const isDay = localTime >= sunrise && localTime < sunset;

    if (api.weather[0].main == "Thunderstorm") {
      return "./utilities/Weather/Thunderstorm.png"
    }
    else if (api.weather[0].main == "Smoke") {
      return "./utilities/Weather/smoke.png"
    }
    else if (api.weather[0].main == "Haze") {
      return "./utilities/Weather/haze.png"
    }
    else if (api.weather[0].main == "Dust") {
      return "./utilities/Weather/dust.png"
    }
    else if (api.weather[0].main == "Fog") {
      return "./utilities/Weather/Fog.png"
    }
    else if (api.weather[0].main == "Sand") {
      return "./utilities/Weather/dust.png"
    }
    else if (api.weather[0].main == 'Ash') {
      return "./utilities/Weather/dust.png"
    }
    else if (api.weather[0].main == "Squall") {
      return "./utilities/Weather/tornado.png"
    }
    else if (api.weather[0].main == 'Tornado') {
      return "./utilities/Weather/tornado.png"
    }
    else if (api.weather[0].main == "Clouds") {
      return "./utilities/Weather/Cloudy.png"
    }
    else if (api.weather[0].main == "Rain" && (api.weather[0].main.description == "heavy intensity rain" || api.weather[0].main.description == "very heavy rain" || api.weather[0].main.description == "extreme rain")) {
      return "./utilities/Weather/Heavy rain.png"
    }
    else if (!isDay) {
      if (api.weather[0].main == "Rain") {
        return "./utilities/Weather/Light Rain(night).png"
      }
      else if (api.weather[0].main == "Drizzle") {
        return "./utilities/Weather/Drizzle(Night).png"
      }
      else if (api.weather[0].main == "Snow") {
        return "./utilities/Weather/snow(night).png"
      }
      else if (api.weather[0].main == "Mist") {
        return "./utilities/Weather/mist(nignt).png"
      }
      else {
        return "./utilities/Weather/Clear(Night).png"
      }
    }
    else {
      if (api.weather[0].main == "Rain") {
        return "./utilities/Weather/Light Rain(day).png"
      }
      else if (api.weather[0].main == "Drizzle") {
        return "./utilities/Weather/Drizzle.png"
      }
      else if (api.weather[0].main == "Snow") {
        return "./utilities/Weather/snow(day).png"
      }
      else if (api.weather[0].main == "Mist") {
        return "./utilities/Weather/mist(day).png"
      }
      else {
        return "./utilities/Weather/Clear(Day).png"
      }
    }

  }
}

function fetch_img_forecast(api, index) {
  if (api) {
    const entry = api.list[index];
    const main = entry.weather[0].main;
    const desc = entry.weather[0].description;
    const localTimestamp = entry.dt + api.city.timezone;
    const hour = new Date(localTimestamp * 1000).getUTCHours();
    const isDay = hour >= 6 && hour < 18;

    if (main == "Thunderstorm") {
      return "./utilities/Weather/Thunderstorm.png";
    } else if (main == "Smoke") {
      return "./utilities/Weather/smoke.png";
    } else if (main == "Haze") {
      return "./utilities/Weather/haze.png";
    } else if (["Dust", "Sand", "Ash"].includes(main)) {
      return "./utilities/Weather/dust.png";
    } else if (main == "Fog") {
      return "./utilities/Weather/Fog.png";
    } else if (["Squall", "Tornado"].includes(main)) {
      return "./utilities/Weather/tornado.png";
    } else if (main == "Clouds") {
      return "./utilities/Weather/Cloudy.png";
    } else if (
      main == "Rain" &&
      ["heavy intensity rain", "very heavy rain", "extreme rain"].includes(desc)
    ) {
      return "./utilities/Weather/Heavy rain.png";
    } else if (!isDay) {
      if (main == "Rain") {
        return "./utilities/Weather/Light Rain(night).png";
      } else if (main == "Drizzle") {
        return "./utilities/Weather/Drizzle(Night).png";
      } else if (main == "Snow") {
        return "./utilities/Weather/snow(night).png";
      } else if (main == "Mist") {
        return "./utilities/Weather/mist(nignt).png";
      } else {
        return "./utilities/Weather/Clear(Night).png";
      }
    } else {
      if (main == "Rain") {
        return "./utilities/Weather/Light Rain(day).png";
      } else if (main == "Drizzle") {
        return "./utilities/Weather/Drizzle.png";
      } else if (main == "Snow") {
        return "./utilities/Weather/snow(day).png";
      } else if (main == "Mist") {
        return "./utilities/Weather/mist(day).png";
      } else {
        return "./utilities/Weather/Clear(Day).png";
      }
    }
  }
}


async function nexttime(api) {
  for (let i = 0; i < 7; i++) {

    let date = new Date((api.list[i].dt + api.city.timezone) * 1000);
    let hour = date.toLocaleTimeString("en-US", {
      weekday: "long",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    });;
    document.getElementById("chart-row").innerHTML += `<span class="chart-axis">${hour}</span>`
  }
}

async function nextday(api) {
  for (let i = 0; i < 6; i++) {
    let date = new Date((api.list[i*8].dt + api.city.timezone) * 1000);
    let hour = date.toLocaleDateString("en-US", { weekday: "long" });
    document.getElementById("next-day-forecast").innerHTML += `<div class="day h-44 w-30 flex flex-col items-center justify-center gap-2 bg-gray-950 rounded-2xl">
            <h3 class="text-xl">${hour}</h3>
            <img src="${fetch_img_forecast(api,i)}" alt=":/" class="w-17 h-17">
            <h3 class="text-xl">${Math.round(api.list[i*8].main.temp)}°</h3>
          </div>`
  }
}

function aqi_check(aqi) { 
  switch (aqi) {
    case 1: return "Good";
    case 2: return "Fair";
    case 3: return "Moderate";
    case 4: return "Poor";
    case 5: return "Very Poor";
    default: return "Unknown";
  }
}




function fetchChartData(api) {
  const MAX_RAIN_MM = 10;
  let chartData = [];
  for (let i = 0; i < 7; i++) {
    const rainValue = api.list[i * 4].rain?.["3h"] ?? 0;
    chartData.push(rainValue + 2);

  }
  const chartWidth = 600;
  const chartHeight = 200;
  const xIncrement = chartWidth / (chartData.length - 1);

  const points = chartData.map((value, i) => {
    const x = i * xIncrement + 20;
    const y = chartHeight - (value / MAX_RAIN_MM) * chartHeight;
    return { x, y };
  });

  let pathData = `M${points[0].x},${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const cp1x = p0.x + (p1.x - p0.x) / 3;
    const cp1y = p0.y;
    const cp2x = p0.x + (2 * (p1.x - p0.x)) / 3;
    const cp2y = p1.y;
    pathData += ` C${cp1x},${cp1y} ${cp2x},${cp2y} ${p1.x},${p1.y}`;
  }

  const areaData = pathData +
    ` L${points[points.length - 1].x},${chartHeight} ` +
    `L${points[0].x},${chartHeight} Z`;

  const path = document.getElementById("precipitationLine");
  const area = document.getElementById("precipitationArea");
  path.setAttribute("d", pathData);
  area.setAttribute("d", areaData);
}

