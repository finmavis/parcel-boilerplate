const showMoreBtn = document.querySelector(".show-more");
const overlay = document.querySelector(".show-more-overlay");
const brands = document.querySelector(".brands");
const products = document.querySelector(".products");
const glide = document.querySelector(".glide");
const glideSmall = document.querySelector(".glide-small");

// Marquee -logo-infinite-loop- /*START*/ //

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");
if (marqueeContent) {
	root.style.setProperty("--marquee-elements", marqueeContent.children.length);

	for (let i = 0; i < marqueeElementsDisplayed; i++) {
		marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
	}
}

// Marquee -logo-infinite-loop- /*END*/ //

if (showMoreBtn) {
	showMoreBtn.addEventListener("click", () => {
		overlay.classList.toggle("hidden");
		brands.classList.toggle("show");
		products.classList.toggle("visible");
		showMoreBtn.textContent = "Zobraziť menej";
		if (showMoreBtn.classList.contains("more")) {
			showMoreBtn.textContent = "Zobraziť všetky";
			showMoreBtn.classList.remove("more");
		} else {
			showMoreBtn.classList.add("more");
		}
	});
}

if (glide) {
	new Glide(".glide", {
		perView: 3,
		breakpoints: {
			800: {
				perView: 2,
			},
			600: {
				perView: 1.5,
			},
		},
	}).mount();
}
if (glideSmall) {
	new Glide(".glide-small", {
		perView: 1,
	}).mount();
}

const bigImage = document.querySelector(".bigImage");
const smallImags = document.querySelectorAll(".smallImage");

smallImags.forEach((image) => {
	image.addEventListener("click", () => {
		bigImage.src = image.src;
	});
	console.log(image.src);
});
console.log(smallImags);
// Accessibility
// function changeCheckbox(lbl) {
// 	const event = window.event;
// 	const cbx = lbl.firstElementChild;
// 	const inpt = lbl.previousElementSibling;

// 	if (!inpt.disabled) {
// 		cbx.ariaChecked = "" + !inpt.checked;

// 		// check box on space or enter
// 		if ((event.type == "keypress" && event.keyCode === 32) || event.keyCode === 13) {
// 			inpt.checked = !inpt.checked;
// 		}
// 	}
// }
const rangeInput = document.querySelectorAll(".range-input input"),
	priceInput = document.querySelectorAll(".price-input input"),
	range = document.querySelector(".slider .progress");
let priceGap = 40;
window.addEventListener("load", () => {});
priceInput.forEach((input) => {
	input.addEventListener("input", (e) => {
		let minPrice = parseInt(priceInput[0].value),
			maxPrice = parseInt(priceInput[1].value);

		if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
			if (e.target.className === "input-min") {
				rangeInput[0].value = minPrice;
				range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
			} else {
				rangeInput[1].value = maxPrice;
				range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
			}
		}
	});
});
if (rangeInput) {
	rangeInput.forEach((input) => {
		input.addEventListener("input", (e) => {
			let minVal = parseInt(rangeInput[0].value),
				maxVal = parseInt(rangeInput[1].value);
			if (maxVal - minVal < priceGap) {
				if (e.target.className === "range-min") {
					rangeInput[0].value = maxVal - priceGap;
				} else {
					rangeInput[1].value = minVal + priceGap;
				}
			} else {
				priceInput[0].value = minVal;
				priceInput[1].value = maxVal;
				range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
				range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
			}
		});
	});
}
const footerArrows = document.querySelectorAll(".footer-heading");
const footerLinks = document.querySelectorAll(".footer-links");
const arrFooterLinks = Array.from(footerLinks);
footerArrows.forEach((arrow, index) => {
	arrow.addEventListener("click", () => {
		arrFooterLinks[index].classList.toggle("visible");
		arrFooterLinks[index].parentNode.classList.toggle("active");
	});
});

const mobileFilter = document.querySelector(".current-listing--filter-mobile");
const mobileFilterMenu = document.querySelector(".current-listing-mobile-filter");
const listingContainer = document.querySelector(".current-listing");
const listedItems = document.querySelector(".current-listing--listed-items");
if (mobileFilter) {
	mobileFilter.addEventListener("click", () => {
		mobileFilter.classList.toggle("active");
		mobileFilterMenu.classList.toggle("active");
		listingContainer.classList.toggle("active");
		listedItems.classList.toggle("active");
	});
}

// ///
// =============
// |  TABS   |
// ===========
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		const target = document.querySelector(tab.dataset.tabTarget);
		if (target.classList.contains("active")) {
			return;
		} else {
			tabContents.forEach((tabContent) => {
				tabContent.classList.remove("active");
			});
			tabs.forEach((tab) => {
				tab.classList.remove("active");
			});
			tab.classList.add("active");
			target.classList.add("active");
			TweenLite.from(target, 1, { autoAlpha: 0 });
		}
	});
});
