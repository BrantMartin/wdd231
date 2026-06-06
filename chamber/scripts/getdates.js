const year = document.querySelector("#currentyear");
const today = new Date();
const formDate = new Date().toISOString();

year.innerHTML = `${today.getFullYear()}`;
document.getElementById("lastmodified").innerHTML =
	`Last modified ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("timestamp").value = `${formDate}`;
});
