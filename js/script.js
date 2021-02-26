$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn(1);
		return false;
	});

	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut(1);
		return false;
	});

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut(1);
		}
	});

	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut(1);
		}
	});
});