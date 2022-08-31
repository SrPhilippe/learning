$(() => {
    let $content = $(".container .content")
    let myRequest = new Request("https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg")

    fetch(myRequest)
        .then(response => response.body)
        .then(body => {
            const reader = body.getReader()

            return new ReadableStream({
                start(controller) {
                    var total = 0
                    return pump()

                    function pump() {
                        return reader.read().then(({
                            done,
                            value
                        }) => {
                            // When no more data needs to be consumed, close the stream
                            if (done) {
                                controller.close()
                                return
                            }

                            // Enqueue the next data chunk into our target stream
                            controller.enqueue(value)
                            total += value.byteLength
                            console.log(`${Math.floor(total / 1024)} MB in total`)
                            return pump()
                        });
                    }
                }
            })
        })
        .then(stream => new Response(stream))
        .then(response => response.blob())
        .then(blob => URL.createObjectURL(blob))
        .then(url => {
            $content.html(`<img src="${url}">`)
            $("#loadscreen").find("p").text("Carregado com Sucesso")
            $("#loadscreen").fadeOut(1000)
        })
        .catch(err => console.error(err))


})
