function validateEmail(email) {
	return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
}

function subscribe() {
	const emailEl = document.getElementById("email");
	const errorStatus = document.getElementById("error");
	const successStatus = document.getElementById("success");
	const hideContent = document.getElementById("content-input");

	if (validateEmail(emailEl.value)) {
		hideContent.classList.add("hidden");
		errorStatus.classList.add("hidden");
        emailEl.classList.remove("input-danger");
		successStatus.classList.remove("hidden");
		console.log("berhasil");
	} else {
		hideContent.classList.remove("hidden");
		errorStatus.classList.remove("hidden");
        emailEl.classList.add("input-danger");
		successStatus.classList.add("hidden");
		console.log("gagal");
	}
}
