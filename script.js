const tl = gsap.timeline({
	scrollTrigger: {
		trigger: "#parallax",
		start: "top top",
		end: "bottom top",
		scrub: 0.5
	}
});

gsap.utils.toArray(".parallax").forEach(layer => {
	const depth = layer.dataset.depth;
	const movement = (layer.offsetHeight * depth)
	tl.to(layer, { y: movement, ease: "none" }, 0)
});

// window.addEventListener('scroll', function() {
//     var header = document.querySelector('.parallax');
//     var scrollY = window.scrollY;
//     header.style.top = scrollY / 4 + 'px';
// });

const currentUrl = location.pathname;
console.log(currentUrl);

// Check for each page
if (currentUrl === '/102/102-Final-Project/index.html' || currentUrl === '/') {
	// Add the `active` class to the `nav-link` element with the href of `index.html`
	document.querySelector('.nav-link[href="index.html"]').classList.add('active');
} else if (currentUrl === '/102/102-Final-Project/about.html') {
	// Add the `active` class to the `nav-link` element with the href of `about.html`
	document.querySelector('.nav-link[href="about.html"]').classList.add('active');
} else if (currentUrl === '/contact.html') {
	// Add the `active` class to the `nav-link` element with the href of `contact.html`
	document.querySelector('.nav-link[href="contact.html"]').classList.add('active');
}
