let aclinpath = document.location.pathname,
	$button = document.querySelector("button#alterar")
	// If you want to do it for all the buttons in the page, use 'querySelectorAll' and the second function below

if (aclinpath == "/CadInventario.php5") {
	
	$button.removeAttribute("disabled")
	
	// $button.forEach(el => {
	// 	el.removeAttribute("disabled")
	// })
}