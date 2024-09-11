import { mount } from "weather/WeatherApp";

window.onload = function () {
	document.querySelector("#load-btn").addEventListener("click", function () {
		mount(document.querySelector("#weather-app"));
	});
};
