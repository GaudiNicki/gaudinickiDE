$(function() {
	const skillsWrapper = $('.skills-wrapper');
	let skillsAreVisible = false;

	$(window).on('scroll', function() {
		const bottom_of_window = $(window).scrollTop() + $(window).height();
		const middle_of_skillsWrapper = skillsWrapper.offset().top + skillsWrapper.outerHeight()/2;
	
		if(bottom_of_window > middle_of_skillsWrapper && !skillsAreVisible) {
			$('.skills-bar-container li').each(function() {

				const barContainer = $(this).find('.bar-container');
				const dataPercent = parseInt(barContainer.data('percent'));
				const progressbar = $(this).find('.progressbar');
				const percent = $(this).find('.percent');
				
				let percentFilled = 0;
				var fillAnimationInterval = setInterval(frame, 15);
		
				function frame() {
					if (percentFilled >= dataPercent) {
						clearInterval(fillAnimationInterval);
					} else {
						percentFilled++;
						progressbar.css("width", percentFilled + "%");
						percent.html(percentFilled + " %");
					}
				}
			});

			skillsAreVisible = true;
		}
	});
});