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

document.addEventListener("DOMContentLoaded", function () {
    const jobTypeSelect = document.getElementById("job-type");
    const jobInputs = document.querySelectorAll(".job-hide-input");

    // Initially hide job-related inputs
    jobInputs.forEach(input => input.style.display = "none");

    // Initialize nice-select
    $(jobTypeSelect).niceSelect();

    // Manually trigger the change event after nice-select initialization
    $(jobTypeSelect).on('change', function () {
        console.log("Nice-select dropdown changed, value:", this.value);
        if (this.value !== "0") {
            jobInputs.forEach(input => input.style.display = "block");
        } else {
            jobInputs.forEach(input => input.style.display = "none");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const incomeSelect = document.getElementById("income");
    const incomeInputs = document.querySelectorAll(".income-hide-input");

    // Initially hide income-related inputs
    incomeInputs.forEach(input => input.style.display = "none");
	
    // Initialize nice-select
    $(incomeSelect).niceSelect();

    // Manually trigger the change event after nice-select initialization
    $(incomeSelect).on('change', function () {
        console.log("Nice-select income dropdown changed, value:", this.value);
        if (this.value === "2") {
            incomeInputs.forEach(input => input.style.display = "block");
        } else {
            incomeInputs.forEach(input => input.style.display = "none");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const incomeSelect = document.getElementById("residence-select");
    const incomeInputs = document.querySelectorAll(".adrs-hide-input");

    // Initially hide income-related inputs
    incomeInputs.forEach(input => input.style.display = "none");
	
    // Initialize nice-select
    $(incomeSelect).niceSelect();

    // Manually trigger the change event after nice-select initialization
    $(incomeSelect).on('change', function () {
        console.log("Nice-select income dropdown changed, value:", this.value);
        if (this.value === "2") {
            incomeInputs.forEach(input => input.style.display = "block");
        } else {
            incomeInputs.forEach(input => input.style.display = "none");
        }
    });
});

// document
// 	.getElementById("formattedPhoneInput")
// 	.addEventListener("input", function (e) {
// 		let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters

// 		if (value.length > 10) {
// 			value = value.slice(0, 10); // Limit to max 10 digits
// 		}

// 		// Format as XXX-XXX-XXXX
// 		if (value.length > 3) {
// 			value = value.slice(0, 3) + "-" + value.slice(3);
// 		}
// 		if (value.length > 7) {
// 			value = value.slice(0, 7) + "-" + value.slice(7);
// 		}

// 		e.target.value = value;
// 	});

document
	.getElementById("formattedPhoneInput")
	.addEventListener("input", function (e) {
		let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters

		// Limit to 10 digits
		if (value.length > 10) {
			value = value.slice(0, 10);
		}

		// Insert hyphens dynamically while typing
		value = value.replace(/^(\d{3})(\d{0,3})?(\d{0,4})?$/, function (_, p1, p2, p3) {
			let formatted = p1;
			if (p2) formatted += "-" + p2;
			if (p3) formatted += "-" + p3;
			return formatted;
		});

		e.target.value = value;
	});

