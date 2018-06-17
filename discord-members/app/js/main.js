$(() => {


    new WOW().init()

    // Elements
    let $button = $(".change"),
        $container = $("#users"),
        $inputAmount = $("input[type='range']"),
        $maxVisible = $(".max-visible")

    let maxUsers = 0,
        allUsers = [],
        discordAPI = "https://discordapp.com/api/guilds/220904314426753025/widget.json"

    fetch(discordAPI)
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            let noPic = 0
            console.log(`usuários ao total ${data.members.length}`)
            console.log(`e a metade arredondada é  ${Math.floor(data.members.length / 2)}`)
            for (let i = 0; i < data.members.length; i++) {
                if (data.members[i].avatar !== null) {
                    allUsers.push(data.members[i])
                } else {
                    noPic++
                }
            }
            console.log(`Este servidor possuí ${noPic} pessoas sem avatar. Os mesmos não serão selecionados.`)
            console.log(`${allUsers.length} membros do servidor possuem avatar e serão selecionados.`)
            maxUsers = Math.floor(allUsers.length / 2)
            $inputAmount.attr("max", allUsers.length)
            $inputAmount.attr("value", maxUsers)
            updateTXT(maxUsers)
        })
        .catch(err => {
            console.error(err)
        })

    $inputAmount.on("input", (evt) => {
        maxUsers = evt.target.value
        updateTXT(maxUsers)
    })

    $button.click(evt => {
        $container.children("ul").empty()
        let membersID = [],
            wowDelay = 0
        for (let i = maxUsers; i > 0; i--) {
            let chosenUser = Math.floor((Math.random() * allUsers.length) + 0)
            let user = allUsers[chosenUser]
            if (user.avatar !== null) {
                if (membersID.indexOf(user.id) === -1) { // The indexOf() gives -1 if the value passed is not present
                    membersID.push(user.id)
                    $container.children("ul").append(`
                            <div class="wow user-container zoomInUp" data-wow-delay="${wowDelay + 's'}">
                                <img class="user" title="${user.username + "#" + user.discriminator}" src="${user.avatar_url}">
                                <p>${user.username + "#" + user.discriminator}</p>
                            </div>
                        `)
                    wowDelay += 0.03
                } else {
                    i++
                }
            } else {
                i++
            }
        }
    })

    function updateTXT(value) {
        if (value > 1) {
            $maxVisible.text(`${value} membros a serem mostrados`)
        } else if (value == 0 || value < 0) {
            $maxVisible.text(`Nenhum membro`)
        } else if (value == 1) {
            $maxVisible.text(`${value} membro a ser mostrado`)
        } else {
            $maxVisible.text(`Houve algum erro!`)
        }
    }

})
