const currentTemp = document.querySelector(".current-temp");
const weatherIcon = document.querySelector(".weather-icon");
const captionDesc = document.querySelector(".weather-caption");
const myKey = "3a4307b2b153320074983c3b8f4773a0";
const myLat = "36.0573";
const myLong = "-112.1439";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {
	try {
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			console.log(data);
            displayResults(data);
		} else {
			throw Error(await response.text());
		}
	} catch (error) {
		console.log(error);
	}
}

function displayResults(data) {
	currentTemp.innerText = `${data.main.temp} F`;
	const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
	let desc = data.weather[0].description;
	weatherIcon.setAttribute("src", iconSrc);
	weatherIcon.setAttribute("alt", data.weather[0].description);
	captionDesc.textContent = `${desc}`;
}

apiFetch();