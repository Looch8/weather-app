// API key - 151ddc79dcaa4472ae173810243103

//Take location and return weather data
async function getWeather(location) {
	const response = await fetch(
		`https://api.weatherapi.com/v1/current.json?key=151ddc79dcaa4472ae173810243103&q=${location}`,
		{ mode: "cors" }
	);
	weatherData = await response.json();

	// call extractWeatherData to display specific data.
	const extractedData = extractWeatherData(weatherData);

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
getWeather("london");
getWeather("adelaide");

// Write the functions that process the JSON data you’re getting from the API and return an object with only the data you require for your app.
