async function getBusinesses() {
	const response = await fetch("./data/members.json");
	const data = await response.json();
	console.log(data.businesses[0]);
	let bName = "";
    let bEst = "";
	let bEmail = "";
	let bPhone = "";
	let bUrl = "";
    let bImg = "";

	for (let i = 0; i < data.businesses.length; i++) {
		bName = document.querySelector(`#bus${i + 1} h3`);
		bName.textContent = data.businesses[i].name;
		bEst = document.querySelector(`#bus${i + 1} p`);
		bEst.innerHTML = `Est. ${data.businesses[i].established}`;
		bEmail = document.querySelector(`#bus${i + 1} .email`);
		bEmail.innerHTML = `<strong>Email:</strong> ${data.businesses[i].email}`;
		bPhone = document.querySelector(`#bus${i + 1} .phone`);
		bPhone.innerHTML = `<strong>Email:</strong> ${data.businesses[i].phone}`;
		bUrl = document.querySelector(`#bus${i + 1} .url`);
		bUrl.innerHTML = `<strong>Email:</strong> ${data.businesses[i].url}`;
		bUrl = document.querySelector(`#bus${i + 1} img`);
		bUrl.src = `${data.businesses[i].img}`;
	}
}

getBusinesses();
