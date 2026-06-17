const visitCount = {
	getCount() {
		return Number(localStorage.getItem("page_visits")) || 0;
	},
	increment() {
		const newCount = this.getCount() + 1;
		localStorage.setItem("page_visits", newCount);
		return newCount;
	},
};
const currentVisits = visitCount.increment();

console.log(`You have visited this page ${currentVisits} times!`);
