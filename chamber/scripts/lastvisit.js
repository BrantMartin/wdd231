const visitMessage = document.querySelector("#visitmessage");
console.log(visitMessage);
const current = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
	visitMessage.innerText = "Welcome! Let us know if you have any questions.";
} else {
	const visitTime = parseInt(lastVisit, 10);
	const difference = current - visitTime;
	//This is how many milliseconds are in one day. 24 * 60 * 60 * 1000
	const oneDay = 86400000;
	if (difference < oneDay) {
		visitMessage.innerText = "Back so soon! Awesome!";
	} else {
		const daysPassed = Math.floor(timeDifference / oneDay);
		if (daysPassed == 1) {
			visitMessage.innerText = "You last visited one day ago.";
		} else {
			visitMessage.innerText = `You last visited ${daysPassed} days ago.`;
		}
	}
}

localStorage.setItem("lastVisit", current);
