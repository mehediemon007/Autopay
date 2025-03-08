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
	window.addEventListener("load", function () {
		setTimeout(() => {
			const preloaders = document.querySelectorAll(".loader-bg"); // Select all elements with class "loader-bg"
			preloaders.forEach((preloader) => {
				preloader.style.display = "none"; // Hide each preloader
			});
			
			if (window.location.pathname === "/loading.html") {
				// You're on the loading.html page
				window.location.replace("login.html");
			}

		}, 1200); // 1.2s delay
	});

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
