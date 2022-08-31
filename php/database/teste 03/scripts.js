$(document).ready(function() {
	
	$('form.login, form.register').hide();
	$('form.login').show();

	$('input[type="button"]').click(function() {
		$('form').toggle();
	});

	// Checar se há texto
	if ($('.msg').text().length > 0) {
		$('.box-msg').slideDown();
	}

	// Fechar mensagem
	$('.box-msg .close').click(() => {
		$('.box-msg').slideUp(() => {
			$('.msg').empty();
		});
	});

});