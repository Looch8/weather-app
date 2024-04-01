// API key - 151ddc79dcaa4472ae173810243103
const submitForm = document.querySelector("#submit-form");
const submitBtn = document.querySelector("#submit-button");
const content = document.querySelector("#content");
const body = document.querySelector("body");

submitBtn.addEventListener("click", function () {
	userInput = submitForm.value;
	getWeather(userInput);
	weatherBackgroundStyle();
});

// Change background color depending on temp
const weatherBackgroundStyle = async () => {
	const weatherData = await getWeather(userInput);
	const temp = parseInt(extractWeatherData(weatherData).temperature_celcius);
	if (temp < 10) {
		body.style.backgroundColor = "lightblue";
	} else if (temp > 30) {
		body.style.backgroundColor = "orange";
	} else {
		body.style.backgroundColor = "green";
	}
};

//Take location and return weather data
async function getWeather(location) {
	const response = await fetch(
		`https://api.weatherapi.com/v1/current.json?key=151ddc79dcaa4472ae173810243103&q=${location}`,
		{ mode: "cors" }
	);

	weatherData = await response.json();

	// call extractWeatherData to display specific data.
	const extractedData = extractWeatherData(weatherData);

	// convert object to array in order to display to DOM
	const displayWeather = Object.values(extractedData);
	content.textContent = displayWeather;

	console.log(weatherData);
	console.log(extractedData);

	return weatherData;
}

// Extract data from json data
function extractWeatherData(weatherData) {
	const weatherObj = {
		description: `The weather for ${weatherData.location.name}, ${weatherData.location.country} is ${weatherData.current.temp_c} degrees celcius, or ${weatherData.current.temp_f} degrees fahrenheit.`,
	};
	return weatherObj;
}
