const modalOne = document.querySelector("#modalOne");
const closeOne = document.querySelector("#closeOne");
const openOne = document.querySelector("#openOne");
const modalTwo = document.querySelector("#modalTwo");
const closeTwo = document.querySelector("#closeTwo");
const openTwo = document.querySelector("#openTwo");
const modalThree = document.querySelector("#modalThree");
const closeThree = document.querySelector("#closeThree");
const openThree = document.querySelector("#openThree");
const modalFour = document.querySelector("#modalFour");
const closeFour = document.querySelector("#closeFour");
const openFour = document.querySelector("#openFour");

openOne.addEventListener("click", () => {
	modalOne.showModal();
});

closeOne.addEventListener("click", () => {
	modalOne.close();
});

openTwo.addEventListener("click", () => {
	modalTwo.showModal();
});

closeTwo.addEventListener("click", () => {
	modalTwo.close();
});

openThree.addEventListener("click", () => {
	modalThree.showModal();
});

closeThree.addEventListener("click", () => {
	modalThree.close();
});

openFour.addEventListener("click", () => {
	modalFour.showModal();
});

closeFour.addEventListener("click", () => {
	modalFour.close();
});