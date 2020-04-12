let divTime = document.getElementById("time"),
    img = divTime.firstElementChild,
    msg = divTime.lastElementChild

window.addEventListener("load", load)

function load() {
    let data = new Date(),
        horas = data.getHours(),
        minutos = data.getMinutes()

    if (horas >= 0 && horas < 12) {
        img.style.backgroundImage = "url(images/morning.jpg)"
        msg.innerText = `Bom dia! São ${horas}:${minutos}`
    } else if (horas >= 12 && horas < 18) {
        img.style.backgroundImage = "url(images/afternoon.jpg)"
        msg.innerText = `Boa tarde! São ${horas}:${minutos}`
    } else {
        img.style.backgroundImage = "url(images/night.jpg)"
        msg.innerText = `Boa noite! São ${horas}:${minutos}`
    }
}
