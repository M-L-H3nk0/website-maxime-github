$('#slider').slick({
   autoplay: false,
   infinite: false,
   slidesToShow: 2,
   slidesToScroll: 1,
});

// setting progress bar
$('.slider-wrap').each(function() {
	var progressBar = $(this).find('.slider-progressbar span');
	var sliderEach = $(this).find('.slider');
	var sliderEachSlide = $(this).find('.slider-each');
	// defining slider length per break point
	var slideLength;
	function positionProgressBar() {
		// change this to minus the number of slides in view, per media breakpoint
		slideLength = sliderEachSlide.length - 2;
	};
	positionProgressBar();
	$(window).on('resize',function() {
		positionProgressBar();
	});

	var slideNo = $(this).find('.slider-each.slick-current').attr('data-slick-index');
	// setting progress bar to 0
	progressBar.css("width","0");
	// when slider triggered
	sliderEach.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		var progressLength = ((nextSlide / slideLength) * 100) + "%";
		progressBar.css("width",progressLength);
	})
});