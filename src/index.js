let dayDate = document.querySelector("#day-date");
dayDate.innerHTML = showDayDate();

function showDayDate() {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  const now = new Date();
  const day = now.toLocaleString("en-US", { weekday: "long" });
  const currentMonth = now.getMonth();
  const month = months[currentMonth];
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  return `${day}, ${month} ${date}, ${hours}:${minutes}`;
}

let searchEngine = document.querySelector("#search-engine");
searchEngine.addEventListener("submit", searchLocation);

function searchLocation(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#inputCity");
  let city = inputCity.value;
  let apiKey = "5da7b2dc058f07286fea39c4cee516a3";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemp);
}

function showTemp(response) {
  let cityTemp = document.querySelector("#temp-today");
  let temperature = Math.round(response.data.main.temp);
  cityTemp.innerHTML = `${temperature}`;
  let location = document.querySelector("#location");
  location.innerHTML = response.data.name;
}

function showCurrentPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let key = "3c949ba49d38be2487ee278e0d2d4059";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appId=${key}&units=metric`;
  axios.get(url).then(showTemp);
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentPosition);
}

let current = document.querySelector("#currentbtn");
current.addEventListener("click", getPosition);

//navigator.geolocation.getCurrentPosition(showCurrentPosition);

// let tempToday = document.querySelector("#temp-today");
// let temperature = tempToday.textContent;
// let isCelsius = true;

// let convertToCelsius = document.querySelector("#celsius");
// convertToCelsius.addEventListener("click", convertTempToC);

// let convertToFahrenheit = document.querySelector("#fahrenheit");
// convertToFahrenheit.addEventListener("click", convertTempToF);

// function convertTempToC(event) {
//   event.preventDefault();
//   if (!isCelsius) {
//     temperature = Math.round((temperature - 32) * 0.5556);
//     tempToday.innerHTML = temperature;
//     isCelsius = true;
//   }
// }

// function convertTempToF(event) {
//   event.preventDefault();
//   if (isCelsius) {
//     temperature = (temperature * 9) / 5 + 32;
//     tempToday.innerHTML = temperature;
//     isCelsius = false;
//   }
// }
