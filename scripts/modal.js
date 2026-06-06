const courseDetails = document.getElementById("course-details");
const courses = document.getElementsByClassName("display");

console.log(courses);

for (let i = 0; i < courses.length; i++) {
	courses[i].addEventListener("click", () => {
		displayCourseDetails();
	});
}

function displayCourseDetails() {
	courseDetails.innerHTML = "";
	courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>Course Num</h2>
    <h3>Course Title</h3>
    <p><strong>Credits</strong>: Credits</p>
    <p><strong>Certificate</strong>: Certificate</p>
    <p>Lorem Description</p>
    <p><strong>Technologies</strong>: Technology</p>
  `;
	courseDetails.showModal();

	closeModal.addEventListener("click", () => {
		courseDetails.close();
	});
}
