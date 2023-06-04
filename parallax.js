// parallax scrolling of header image

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".parallax",
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

// jQuery form validation

$(document).ready(function() {
    $("form").on("submit", function(event) {
        var email = $("#email").val();
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (email === "" || !emailRegex.test(email)) {
            event.preventDefault();

            $("#email").addClass("invalid")
                       .attr("placeholder", email === "" ? "please provide your email" : "please provide a valid email")
                       .val("");
        } else {
            $("#email").removeClass("invalid");
        }
    });

    $("#email").on("input", function() {
        $(this).removeClass("invalid");
    });
});