async function getHikes() {
	const response = await fetch("./data/hikes.json");
	const data = await response.json();
	const main = document.querySelector("main");
	let card;
	let heading;
	let p;
	let span;
	let figure;
	let img;
	let figcaption;
	let button;
	let count = 0;

	data.hikes.forEach((hike) => {
		card = document.createElement("section");
		card.className = "weathercard";
		heading = document.createElement("h3");
		heading.innerText = hike.location_name;
		p = document.createElement("p");
		p.innerText = `The current temperature in ${hike.city} is `;
		span = document.createElement("span");
		span.className = "current-temp";
		span.innerText = "test";
		figure = document.createElement("figure");
		img = document.createElement("img");
		img.className = "weather-icon";
		img.loading = "lazy";
		figcaption = document.createElement("figcaption");
		figcaption.className = "weather-caption";
		button = document.createElement("button");
		button.innerText = "More Info";
		console.log(button);
		card.appendChild(heading);
		p.appendChild(span);
		card.appendChild(p);
		figure.appendChild(img);
		figure.appendChild(figcaption);
		card.appendChild(figure);
		card.appendChild(button);
		main.appendChild(card);
		console.log(card);

		const myModal = document.createElement("dialog");
        const name = document.createElement("h3")
        const address = document.createElement("p")
        const length = document.createElement("p")
        const time = document.createElement("p")
		const modalButton = document.createElement("button");
		myModal.className = `modal${count}`;
        modalButton.innerText = "Close"
        name.innerText = hike.location_name;
        address.innerText = `Address: ${hike.address}`;
        length.innerText = `Hike Length: ${hike.hike_length}`;
        time.innerText = `Estimated Hike Time: ${hike.estimated_hike_time}`;
        myModal.appendChild(name)
        myModal.appendChild(address)
        myModal.appendChild(length)
        myModal.appendChild(time)
		myModal.appendChild(modalButton);
		main.appendChild(myModal);

		button.addEventListener("click", () => {
			myModal.showModal();
		});

		modalButton.addEventListener("click", () => {
			myModal.close();
		});

		const currentTemp = span;
		const weatherIcon = img;
		const captionDesc = figcaption;
		const myKey = "3a4307b2b153320074983c3b8f4773a0";
		const myLat = hike.latitude;
		const myLong = hike.longitude;

		const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

		async function apiFetch() {
			try {
				const response = await fetch(url);
				if (response.ok) {
					const data = await response.json();
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
		count += 1;
	});
}

getHikes();
