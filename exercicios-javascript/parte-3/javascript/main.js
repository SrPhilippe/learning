let inputSubmit = document.querySelector('form input[type="submit"]')

document.querySelector('form').onsubmit = (e) => {
    e.preventDefault() // Prevent the default (SUBMIT) event which realods the page
    console.log(e)
    let form = new FormData(e.target),
        data = {}

    // form.forEach((value, key) => {data[key] = value})

    console.log(form.get('anoNasc'))

    let date = new Date(),
        year = date.getFullYear()
        month = date.getMonth()

        if (form.get('anoNasc') == 0 || form.get('anoNasc') > year) {
            console.log(`Ocorreu um erro na validação de dados.`)
        } else {
            let age = year - form.get('anoNasc')
            console.log(age)
        }
}