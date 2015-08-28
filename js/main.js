$(document).ready(function () {
	$('a').on('click', function (e) {
		var $this = $(this);
		var href = $this.attr('href');
		var $target = $(href);

		if ( $target.length > 0) {
			e.preventDefault();

			var offset = $target.offset().top;

			$('html,body').animate({
				scrollTop: offset
			}, {
				duration: 500
			});
		}
	});
});
