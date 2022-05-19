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

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
	marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
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
const footerArrows = document.querySelectorAll(".footer-heading");
const footerLinks = document.querySelectorAll(".footer-links");
const arrFooterLinks = Array.from(footerLinks);
footerArrows.forEach((arrow, index) => {
	arrow.addEventListener("click", () => {
		arrFooterLinks[index].classList.toggle("visible");
	});
});

// window.addEventListener("load", () => {
// 	let minVal = parseInt(rangeInput[0].value),
// 		maxVal = parseInt(rangeInput[1].value);
// 	priceInput[0].value = minVal;
// 	priceInput[1].value = maxVal;
// 	range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
// 	range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
// });
// const sel = document.querySelector(".dropdown-filter");
// const sel2 = document.querySelector(".dropdown-filter.second");
// const wrap = document.querySelector(".dropdown-filter--wrapper");
// const wrap2 = document.querySelector(".dropdown-filter--wrapper.second");
// sel.addEventListener("click", () => {
// 	wrap.classList.toggle("visible");
// });
// sel2.addEventListener("click", () => {
// 	wrap2.classList.toggle("visible");
// });

// accordeon //

// Scratch - card //
// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");

// var Pencil = function (options) {
// 	this.options = {
// 		strokeColor: "rgb(255,255,255)",
// 		fillStyle: "#666",
// 		prizeText: "一等奖",
// 		lineWidth: 60,
// 	};
// 	this.init = function (canvas, ctx) {
// 		this.canvas = canvas;
// 		this.canvasPos = $(this.canvas).offset();
// 		this.ctx = ctx;
// 		this.ctx.fillStyle = this.options.fillStyle;
// 		this.ctx.fillRect(0, 0, canvas.width, canvas.height);

// 		//console.log(this.options.stroke_color);
// 		this.ctx.strokeStyle = this.options.stroke_color;
// 		this.ctx.lineWidth = this.options.lineWidth;
// 		this.ctx.lineCap = "round";
// 		this.ctx.globalCompositeOperation = "destination-out";
// 		this.drawing = false;
// 		this.addCanvasEvents();
// 	};
// 	this.addCanvasEvents = function () {
// 		//passing args using addEventListener is a little complex
// 		//use on() in jquery
// 		var c = $(this.canvas);
// 		c.on("mousedown", this, this.start);
// 		c.on("mousemove", this, this.stroke);
// 		c.on("mouseup", this, this.stop);
// 		this.bindMobile(c);
// 	};
// 	this.start = function (event) {
// 		var pen = event.data;
// 		var x = event.pageX - pen.canvasPos.left;
// 		var y = event.pageY - pen.canvasPos.top;
// 		pen.ctx.beginPath();
// 		pen.ctx.moveTo(x, y);
// 		pen.drawing = true;
// 	};
// 	this.stroke = function (event) {
// 		var pen = event.data;
// 		if (pen.drawing) {
// 			var x = event.pageX - pen.canvasPos.left;
// 			var y = event.pageY - pen.canvasPos.top;

// 			pen.ctx.lineTo(x, y);
// 			pen.ctx.stroke();
// 		}
// 	};

// 	this.stop = function (event) {
// 		var pen = event.data;
// 		pen.drawing = false;

// 		//decide if we have done this card
// 		var imageData;
// 		var lineNum = 0,
// 			lineHei = 10,
// 			den = 10,
// 			pixel,
// 			drawnCounter = 0,
// 			sumCounter = 0;
// 		imageData = pen.ctx.getImageData(0, 0, pen.canvas.width, pen.canvas.height);
// 		for (h = 0; h < pen.canvas.height; h += lineHei) {
// 			// console.log(startX);
// 			for (w = 0; w < pen.canvas.width; w += den) {
// 				sumCounter++;
// 				pixel = imageData.data[(w + h * pen.canvas.width) * 4 - 1];
// 				//pixel is not transparent
// 				if (pixel != 0 && pixel) {
// 					drawnCounter++;
// 				}
// 			}
// 		}
// 		console.log((sumCounter - drawnCounter) / sumCounter);
// 	};

// 	this.clear = function (canvas, ctx) {
// 		canvas.width = canvas.width;
// 		ctx.save();
// 		ctx.fillStyle = "#666";
// 		ctx.fillRect(0, 0, canvas.width, canvas.height);
// 		ctx.restore();
// 		//console.log(this);
// 		this.init(canvas, ctx);
// 	};

// 	this.bindMobile = function (obj) {
// 		obj.bind("touchstart touchmove touchend touchcancel", function () {
// 			var e = event.changedTouches,
// 				t = e[0],
// 				n = "";
// 			switch (event.type) {
// 				case "touchstart":
// 					n = "mousedown";
// 					break;
// 				case "touchmove":
// 					n = "mousemove";
// 					break;
// 				case "touchend":
// 					n = "mouseup";
// 					break;
// 				default:
// 					return;
// 			}
// 			var r = document.createEvent("MouseEvent");
// 			r.initMouseEvent(n, true, true, window, 1, t.screenX, t.screenY, t.clientX, t.clientY, false, false, false, false, 0, null);
// 			t.target.dispatchEvent(r);
// 			event.preventDefault();
// 		});
// 	};

// 	this.createBG = function (type) {
// 		var c = $("<canvas></canvas>").get(0);
// 		c.width = 500;
// 		c.height = 200;
// 		var ctx = c.getContext("2d");
// 		ctx.fillStyle = "#f00";
// 		ctx.font = " bold 50px 微软雅黑";
// 		ctx.textBaseline = "middle";
// 		ctx.fillText(this.options.prizeText, c.width / 2, c.height / 2);

// 		// 图片导出为 png 格式
// 		var imgType = "png";
// 		var imgData = c.toDataURL(imgType);
// 		console.log(imgData);
// 		return imgData;
// 	};
// };

// var p = new Pencil();
// p.init(canvas, ctx);
// $("#canvasWrap").css({
// 	"background-image": "url(" + p.createBG() + ")",
// });
// //p.createBG();
// $("#clearCanvas").click(function () {
// 	p.clear(canvas, ctx);
// });
