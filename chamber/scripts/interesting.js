import { places } from "../data/places.mjs";
console.log(places);

const placeSection = document.querySelector("#places");

function displayItems(places) {
	places.forEach((place) => {
		const card = document.createElement("div");
		const photo = document.createElement("img");
		photo.src = `images/${place.photo_url}`;
        photo.alt = photo.name;
        card.appendChild(photo);
        const title = document.createElement("h2");
        title.innerText = place.name;
        card.appendChild(title);
        const address = document.createElement("address");
        address.innerText = place.address;
        card.appendChild(address);
        const description = document.createElement("p");
        description.innerText = place.description;
        description.setAttribute("id", "description");
        card.appendChild(description);
        const cost = document.createElement("p");
        cost.innerText = place.cost;
        cost.setAttribute("id", "cost");
        card.appendChild(cost);
        const button = document.createElement("button");
        button.innerText = "Learn More";
        card.appendChild(button);
        placeSection.appendChild(card);
	});
}

displayItems(places);