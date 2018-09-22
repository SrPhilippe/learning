$(document).ready(function() {
	
	$('form').hide();
	$('form:last').show();

	$('input[type="button"]').click(function() {
		$('form').toggle();
	});



});