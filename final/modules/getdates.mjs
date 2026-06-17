const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `${today.getFullYear()}`;
document.getElementById("lastmodified").innerHTML = `Last modified ${document.lastModified}`;