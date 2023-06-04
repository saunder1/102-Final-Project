
// parallax scrolling of header image

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: "#parallax",
		start: "top top",
		end: "bottom top",
		scrub: true
	}
});

gsap.utils.toArray(".parallax").forEach(layer => {
	const depth = layer.dataset.depth;
	const movement = (layer.offsetHeight * depth)
	tl.to(layer, { y: movement, ease: "none" }, 0)
});



// persistent underline for current page

const currentUrl = location.pathname;

if (currentUrl === '/102/102-Final-Project/index.html' || currentUrl === '/') {
	document.querySelector('.nav-link[href="index.html"]').classList.add('active');
} else if (currentUrl === '/102/102-Final-Project/connor.html') {
	document.querySelector('.nav-link[href="connor.html"]').classList.add('active');
} else if (currentUrl === '/102/102-Final-Project/olivia.html') {
	document.querySelector('.nav-link[href="olivia.html"]').classList.add('active');
} else if (currentUrl === '/102/102-Final-Project/avery.html') {
	document.querySelector('.nav-link[href="avery.html"]').classList.add('active');
} else if (currentUrl === '/102/102-Final-Project/ben.html') {
	document.querySelector('.nav-link[href="ben.html"]').classList.add('active');
}


// hamburger toggling

document.querySelector(".hamburger").addEventListener("click", function() {
	var nav = document.querySelector(".mobile-nav");
	nav.classList.toggle("visible");
});

// allows clicking anywhere to close mobile-nav menu

document.addEventListener("click", function(e) {
	var nav = document.querySelector(".mobile-nav");

	// Check if the mobile nav is visible and if the target of the click event is not the mobile nav or a descendant of it
	if (nav.classList.contains("visible") && !nav.contains(e.target) && e.target != document.querySelector(".hamburger")) {
		nav.classList.remove("visible");
	}
});