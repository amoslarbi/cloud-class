(function ($) {
	/**
	 * jQuery plugin wrapper for compatibility
	 */
	$.fn.APSummernote = function () {
		if (! this.length) return;
		if (typeof $.fn.summernote != 'undefined') {
			this.summernote({
				popover: {
					image: [],
					link: [],
					air: []
				},
				toolbar: [
			        // [groupName, [list of button]]
			        ['style', ['bold', 'italic', 'underline', 'clear']],
			        ['fontsize', ['fontsize']]
			      ],

			    placeholder: 'Description goes here...'
			});
		}
	};
	
	$('.summernote').APSummernote();

}(jQuery));