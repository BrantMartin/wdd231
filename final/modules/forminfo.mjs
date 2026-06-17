const getString = window.location.search;

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

document.querySelector("#forminfo").innerHTML = `
<p>Thank you ${myInfo.get("fullname")}</p>
<p>You are signed up for the newsletter with this email:</p>
<p>${myInfo.get("email")}</p>
`;
