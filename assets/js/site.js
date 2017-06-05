(function( $ ) {
	'use strict';

	$(".burger-trigger").click(function(e){
		e.preventDefault();
		console.log('fired');
		$('.mobile-main-navigation').toggleClass('open');
	});

})( jQuery );
