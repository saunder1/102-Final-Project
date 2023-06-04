// persistent underline for current page

const fullUrl = location.pathname;
const currentUrl = fullUrl.split("/").pop();

if (currentUrl === 'index.html' || currentUrl === '/') {
	document.querySelector('.nav-link[href="index.html"]').classList.add('active');
} else if (currentUrl === 'connor.html') {
	document.querySelector('.nav-link[href="connor.html"]').classList.add('active');
} else if (currentUrl === 'olivia.html') {
	document.querySelector('.nav-link[href="olivia.html"]').classList.add('active');
} else if (currentUrl === 'avery.html') {
	document.querySelector('.nav-link[href="avery.html"]').classList.add('active');
} else if (currentUrl === 'ben.html') {
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

	if (nav.classList.contains("visible") && !nav.contains(e.target) && e.target != document.querySelector(".hamburger")) {
		nav.classList.remove("visible");
	}
});