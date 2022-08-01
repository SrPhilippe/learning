let aclinpath = document.location.pathname,
	$button = document.querySelector("button#alterar")
	// If you want to do it for all the buttons in the page, use 'querySelectorAll' and the second function below

if (aclinpath == "/CadInventario.php5") {
	
	$button.removeAttribute("disabled")
	
	// $button.forEach(el => {
	// 	el.removeAttribute("disabled")
	// })
} else if (aclinpath == "/OSBiomedicaEmergencia.php5") {
	let $buttonPDF = document.createElement("a"),
		$tudo = document.querySelector('#tudo'),
		numberOS = "23135"
	
	$buttonPDF.classList.add("mm-button", "mm-theme-l1")
	$buttonPDF.innerHTML = "PDF"
	$buttonPDF.setAttribute('href', `https://aclin-check.com.br/Relatorio_OSMC.php?CODE=${numberOS}&CNPJ=17178203000680&Caminho_Imagem=/public_html/ImageLogo/17178203000680.jpg`)
	$tudo.children.item(1).append($buttonPDF)
}