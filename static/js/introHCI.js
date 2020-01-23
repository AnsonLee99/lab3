'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("The button was pressed!");

		$(this).text("I AM THE BETTER BUTTON!!")

		$(".jumbotron p").toggleClass("active");
	});

	$("a.thumbnail").click(function(e) {
		e.preventDefault();

		var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       $(description).fadeOut();
    }
	})
}

