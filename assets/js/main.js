$(document).ready(() => {
	"use strict";

	const progressContainer = document.querySelector(".progress-container");
	// initial call
	setPercentage();
	function setPercentage() {
		const percentage =
			progressContainer.getAttribute("data-percentage") + "%";

		const progressEl = progressContainer.querySelector(".progress");
		const percentageEl = progressContainer.querySelector(".percentage");

		progressEl.style.width = percentage;
		percentageEl.innerText = percentage;
		percentageEl.style.left = percentage;
	}
	
	//Bootstrap Tooltip
	var tooltipTriggerList = [].slice.call(
		document.querySelectorAll('[data-bs-toggle="tooltip"]')
	);
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});

	//--== Aos Animation ==--//
	$(document).ready(function () {
		AOS.init({
			once: true,
		});
	});
	//--== Aos Animation ==--//

	//--== Nice Select ==--//
	$("select").niceSelect();
	//--== Nice Select ==--//
});

document.addEventListener("DOMContentLoaded", function () {
	setTimeout(() => {
		const preloaders = document.querySelectorAll(".loader-bg");
		preloaders.forEach((preloader) => {
			preloader.classList.add("active");
		});

		if (window.location.pathname === "/loading.html") {
			window.location.replace("./login.html");
		}

	}, 1200);
});

document.addEventListener("DOMContentLoaded", function () {
    const sameAddressBtn = document.getElementById("same-addres");
    const diffAddressBtn = document.getElementById("diff-adres");
    const addressToggle = document.querySelector(".input-toggle");

    // Initially hide the address form
    addressToggle.style.display = "none";

    // Show address form when clicking "Different Address"
    diffAddressBtn.addEventListener("click", function () {
        addressToggle.style.display = "block";
    });

    // Hide address form when clicking "Same as Applicant"
    sameAddressBtn.addEventListener("click", function () {
        addressToggle.style.display = "none";
    });
});