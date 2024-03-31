console.log("hi");

// Write the functions that hit the API. You’re going to want functions that can take a location and return the weather data for that location. For now, just console.log() the information.

// Function that takes location and return weather data

// API key - 151ddc79dcaa4472ae173810243103

console.log(
	`https://api.weatherapi.com/v1/current.json?key=151ddc79dcaa4472ae173810243103&q=london`
);

// Get weather Data
async function getWeather(location) {
	const response = await fetch(
		`https://api.weatherapi.com/v1/current.json?key=151ddc79dcaa4472ae173810243103&q=${location}`
	);
	const weatherData = await response.json();
	console.log(weatherData);
}

getWeather(`london`);
getWeather(`adelaide`);
