// Checking whether the documents are loaded properly or not
$(document).ready(function () {
	//Setting Options
	var speed = 500; 				// Speed Transition between Images
	var autoswitch = false;  		// Auto Slider Option
	var autoswitch_speed = 4000; 	// Auto Slider Speed

	// Adding 'active' class to First Image slider
	$('.slide').first().addClass('active');

	// Hiding all Image Slider
	$('.slide').hide();

	// Show First Image Slider having active class
	$('.active').show();

	// Going to Use Event handlers for image transitions

	// Calling nextSlide function
	$('#next').on('click', nextSlide);


	// Calling prevSlide function
	$('#prev').on('click', prevSlide);


	//Setting autoswitch image slider using setInterval function
	if(autoswitch == true) {
		setInterval(nextSlide, autoswitch_speed);
	}

	// Switch to next slide
	function nextSlide() {
		$('.active').removeClass('active').addClass('oldActive');   // Removing activeclass and adding oldactive class instead

		//Checking oldactive class is las child
		if($('.oldActive').is(':last-child')) {
			$('.slide').first().addClass('active');   // Upon clicking last slider next arrow, first slider starts showing
		} else {
			$('.oldActive').next().addClass('active');
		}

		// Removing oldActive class together
		$('.oldActive').removeClass('oldActive');

		$('.slide').fadeOut(speed);  // FadeOut existing slider
		$('.active').fadeIn(speed);  // Setting active slider class
	}


	function prevSlide() {
		$('.active').removeClass('active').addClass('oldActive');   // Removing activeclass and adding oldactive class instead

		//Checking oldactive class is las child
		if($('.oldActive').is(':first-child')) {
			$('.slide').last().addClass('active');   // Upon clicking first slider prev arrow, last slider starts showing
		} else {
			$('.oldActive').prev().addClass('active'); // Assign active class to prev slider
		}

		// Removing oldActive class together
		$('.oldActive').removeClass('oldActive');

		$('.slide').fadeOut(speed); // FadeOut existing slider
		$('.active').fadeIn(speed); // Setting active slider class
	}

});