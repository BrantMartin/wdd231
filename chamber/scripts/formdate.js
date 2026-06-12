const formDate = new Date().toISOString();

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("timestamp").value = `${formDate}`;
});
