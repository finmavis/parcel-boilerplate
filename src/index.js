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

/// Toggling Small menus ///

const footerArrows = document.querySelectorAll(".footer-heading");
const footerLinks = Array.from(document.querySelectorAll(".footer-links"));
const productArrows = document.querySelectorAll(".product-heading");
const productLinks = Array.from(document.querySelectorAll(".product-links"));

function toggleCategoriesMenu(elements, arrayOfElements) {
	elements.forEach((element, index) => {
		element.addEventListener("click", () => {
			arrayOfElements[index].classList.toggle("visible");
			arrayOfElements[index].parentNode.classList.toggle("active");
		});
	});
}

toggleCategoriesMenu(footerArrows, footerLinks);
toggleCategoriesMenu(productArrows, productLinks);

/// Toggling Small menus ends ///

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

// Shuffle //
window.onload = function () {
	const Shuffle = window.Shuffle;
	const element = document.querySelector(".shuffle-container");

	const shuffleInstance = new Shuffle(element, {
		itemSelector: "li",
	});

	$(".top-filters li").on("click", function (e) {
		e.preventDefault();
		$(".top-filters li").removeClass("selected");
		$(this).addClass("selected");
		const keyword = $(this).attr("data-target");
		shuffleInstance.filter(keyword);
	});
};

// pagination
$(function () {
	let container = $("#pagination");
	container.pagination({
		pageSize: 10,
		pageRange: 1,
		dataSource: [
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-1.847fcd17.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-2.bbff1372.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-3.cc810867.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-4.2a27b993.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-5.2d5afb38.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-6.40686b0b.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-1.847fcd17.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-2.bbff1372.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-3.cc810867.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-4.2a27b993.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-5.2d5afb38.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-6.40686b0b.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-1.847fcd17.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-2.bbff1372.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-3.cc810867.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-4.2a27b993.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-5.2d5afb38.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-6.40686b0b.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-1.847fcd17.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-2.bbff1372.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-3.cc810867.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-4.2a27b993.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-5.2d5afb38.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
			{
				productName: "Navahoo honigfee dámska zimná bunda",
				productDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ducimus? Magni deserunt debitis nulla voluptatibus nam, atque vel quasi sequi rerum, doloremque corporis molestias amet ipsam expedita tenetur officiis recusandae reprehenderit inventore.",
				productImage: "/Product Image-6.40686b0b.png",
				lowestPrice: 32.8,
				highestPrice: 44,
				reviewsCount: 35,
				shops: 24,
			},
		],
		callback: function (data, pagination) {
			var dataHtml = "<div class='listing-items'>";
			$.each(data, function (index, item) {
				dataHtml += `
				<div class="listing-items__item">
				<div class="listing-items__item__image">
					<img src='${item.productImage}' alt="">			
				</div>
					<div class="listing-items__item__description">
						<div class="top-informations">
							<div>top1</div>
							<div class="compare-reviews">
								<a href="#" class="compare">porovnovať</a>
								<a href="#">${item.reviewsCount} recenzií</a>
							</div>
						</div>
						<h2 class="product-heading">
							${item.productName}
						</h2>
						<p>${item.productDescription}</p>
						<div class="pricing">
							<button>Porovnať ceny</button>
							<div class="price">
								<span>od ${item.lowestPrice} € ~ ${item.highestPrice} €</span>
								<a href="#">v ${item.shops} obchodoch</a>
							</div>
						</div>
					</div>
				</div> 
				`;
			});

			dataHtml += "</div>";
			let width = window.innerWidth;
			$("#data-container").html(dataHtml);
			$("body,html").animate(
				{
					scrollTop: 450,
				},
				600
			);
		},
	});
});
