window.onload = function () {
	const close = document.getElementById("close");
	const open = document.getElementById("open");
	const menu = document.getElementById("menu");

	close.addEventListener("click", toggle);
	open.addEventListener("click", toggle);

	function toggle() {
		menu.classList.toggle("open");
		close.classList.toggle("d-none");
		open.classList.toggle("d-none");
	}

	document.body.onscroll = function () {
		if (window.scrollY > 50)
			document.getElementById("nav").classList.add("nav-shadow");
		else document.getElementById("nav").classList.remove("nav-shadow");
	};

	function typed(id, strings) {
		new Typed(`#${id}`, {
			strings,
			typeSpeed: 100,
			loop: true,
		});
	}

	typed("intro-text-1", ["let's", "begin", "to"]);
	typed("intro-text-2", ["new", "modern", "unique"]);

	$(document).ready(function () {
		$(".owl-carousel").owlCarousel({
			autoplayTimeout: 500,
			autoplay: true,
			loop: true,
			nav: false,
			responsive: {
				0: {
					items: 2,
				},
				600: {
					items: 3,
				},
				1000: {
					items: 5,
				},
			},
		});
	});

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting)
				entry.target.classList.add("h2-text-container-size-animation");
			else entry.target.classList.remove("h2-text-container-size-animation");
		});
	});

	document.querySelectorAll(".cv").forEach((el) => observer.observe(el));
};
