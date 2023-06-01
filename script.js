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
	tl.to(layer, {y: movement, ease: "none"}, 0)
});

// window.addEventListener('scroll', function() {
//     var header = document.querySelector('.parallax');
//     var scrollY = window.scrollY;
//     header.style.top = scrollY / 4 + 'px';
// });