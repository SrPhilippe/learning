const $input = document. querySelector('input')

window.addEventListener('load', resolveTheme())

$input.addEventListener('click', event => {
    event.target.checked
        ? localStorage.theme = 'dark'
        : localStorage.theme = 'light'
})


function resolveTheme() {
    if (localStorage.theme) {
        localStorage.theme === 'light'
            ? ($input.checked = false)
            : ($input.checked = true)
    } else {
        localStorage.theme = 'light'
    }
}