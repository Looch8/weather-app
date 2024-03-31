// API key - 151ddc79dcaa4472ae173810243103
const submitForm = document.querySelector("#submit-form");
const submitBtn = document.querySelector("#submit-button");
const content = document.querySelector("#content");

submitBtn.addEventListener("click", function () {
	userInput = submitForm.value;
	getWeather(userInput);
});

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
		city: weatherData.location.name,
		country: weatherData.location.country,
		temperature_celcius: `${weatherData.current.temp_c} celcius`,
		temperature_fahrenheit: `${weatherData.current.temp_f} fahrenheit`,
	};
	return weatherObj;
}
