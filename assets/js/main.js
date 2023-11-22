function validateEmail(email) {
	return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
}

function subscribe() {
	const email = document.getElementById("email").value;
	const errorStatus = document.getElementById("error");
	const successStatus = document.getElementById("success");
	const hideContent = document.getElementById("content-input");

	if (validateEmail(email)) {
		hideContent.classList.add("hidden");
		errorStatus.classList.add("hidden");
		successStatus.classList.remove("hidden");
		console.log("berhasil");
	} else {
		hideContent.classList.remove("hidden");
		errorStatus.classList.remove("hidden");
		successStatus.classList.add("hidden");
		console.log("gagal");
	}
}
