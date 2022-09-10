const dogAPI = 'https://dog.ceo/api/breed/husky/images/random',
	$img = document.querySelector('#app .img-box img'),
	$button = document.querySelector('#app input.get-husky'),
	$loading = document.querySelector('#app .loading')

$button.addEventListener('click', (event) => {
	event.preventDefault()
	newHusky(false)
})

newHusky(true)

function newHusky(isNewInstance) {
	$loading.classList.toggle('show-hide')
	if (!isNewInstance) {
		$img.classList.toggle('show-hide')
	}

	fetch(dogAPI)
		.then((resp) => {
			return resp.json()
		})
		.then((data) => {
			$img.setAttribute('src', data.message)
		})
		.then(() => {
			$img.classList.toggle('show-hide')
			window.setTimeout(() => {
				$loading.classList.toggle('show-hide')
			}, 500)
		})
}
