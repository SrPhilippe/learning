let sendButton = document.querySelector('input')

sendButton.addEventListener('click', event => {
    console.log(`The event [${event.type}] was dispatched`)
    if (event.isTrusted) {
        console.log('Checking event authenticity...')
        setTimeout(() => {
            console.log(`Trusted event [${event.type}]`)
        }, 1500)
    }
})