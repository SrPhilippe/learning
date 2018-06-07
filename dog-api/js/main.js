$(document).ready(() => {
    let dogAPI = "https://dog.ceo/api/breed/husky/images/random"
    let $app = $("#app")
    let $bar = $("progress")

    $(document).on("click", "#app .get-husky", (e) => {
        newHusky(true)
    })

    newHusky() // call to the function when the DOCUMENT is ready

    function newHusky(isURL) {
        fetch(dogAPI)
            .then((resp) => {
                return resp.json()
            })
            .then((data) => {
                if (!isURL) {
                    $app.html(`
                        <div class="img-box">
                            <input type="button" class="get-husky" value="GET Husky">
                            <img src="${data.message}">
                        </div>
                        `)
                } else {
                    $app.find("img").attr("src", data.message)
                }
                console.log(`Your husky ${data.message} is ready`)
            })
            .catch((err) => {
                console.error(err)
            })
    }

})
