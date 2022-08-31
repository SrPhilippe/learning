let form = document.getElementById('CEP'),
    queryEl = document.querySelector('input[name="cep"]'),
    elements = document.querySelectorAll('#info .item > .item'),
    status = document.getElementById('status')

queryEl.addEventListener('input', evt => {
    if (evt.target.value.length === 8) {
        let request = new Request(`https://viacep.com.br/ws/${evt.target.value}/json/`)
        fetch(request)
            .then(resp => {
                return resp.json()
            })
            .then(info => {
                console.log(info)
                elements[0].childNodes.item(3).textContent = info.cep
                elements[1].childNodes.item(3).textContent = info.bairro
                elements[2].childNodes.item(3).textContent = info.logradouro
                elements[3].childNodes.item(3).textContent = info.uf
                showMessage(evt.target.value.length, 'success')
            })
            .catch(err => console.error(err))
    } else {
        showMessage(evt.target.value.length, 'default')
    }
})

function showMessage(num, msg) {
    status.style.display = 'block'
    if (msg === 'default') {
        status.textContent = `Adicine um CEP de 8 dígitos. Você adicionou (${num}) dígitos.`
    } else if (msg === 'success') {
        status.textContent = `Busca realizada com sucesso!`
    }
    setTimeout(() => [
        status.style.display = 'none'
    ], 1500)
}