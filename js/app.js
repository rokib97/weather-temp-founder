// api key stored
const API_KEY = `e69f72450ea993ae048899c7f86212ea`;

// enent handler and fetch the data
document.getElementById("searchTemp").addEventListener("click", function () {
  const city = document.getElementById("city-name");
  const cityName = city.value;
  if (city.value == "" || !isNaN(city.value)) {
    document.getElementById("error-msg").style.display = "block";
    document.getElementById("details").style.display = "none";
    city.value = "";
  } else {
    city.value = "";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => displayTemp(data));
    document.getElementById("error-msg").style.display = "none";
    document.getElementById("details").style.display = "block";

    city.value = "";
  }
});

// function to set inner text
const setInnerText = (id, value) => {
  document.getElementById(id).innerText = value;
};

// function to display weather in the UI
const displayTemp = (temp) => {
  console.log(temp.length == 0);

  setInnerText("city", temp.name);
  setInnerText("temp", temp.main.temp);
  setInnerText("condition", temp.weather[0].main);

  const url = `https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
  const weatherIcon = document.getElementById("weather-icon");
  weatherIcon.setAttribute(".src", url);
};
