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

	//Card Open
	window.onload = function () {
		setTimeout(() => {
			const preloaders = document.querySelectorAll(".loader-bg");
			console.log("Preloaders found: ", preloaders.length); // Debugging line to check if elements are found
			
			if (preloaders.length > 0) {
				preloaders.forEach((preloader) => {
					preloader.style.display = "none"; // Hide each preloader
				});
				console.log("Preloaders hidden."); // Debugging line to confirm hiding
			} else {
				console.log("No preloaders found."); // Debugging line if no preloaders are found
			}
			
			if (window.location.pathname === "/loading.html") {
				console.log("Redirecting to login.html"); // Debugging line before redirect
				window.location.replace("./login.html");
			}
	
		}, 1500); // 1.5s delay
	};
	

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
