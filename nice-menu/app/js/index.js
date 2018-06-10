$(() => {

    if ($(window).width() >= 1024) {
        $("#menu ul li").mousemove((e) => {
            $("#menu ul li").css("margin", `0 ${e.pageX * .01}px`)
        })
    }

    $("#menu ul a").click((e) => {
        e.preventDefault()
    })

    $(".menu-mobile").click((e) => {
        $(e.target).find(".icon").toggleClass("menu remove")
        // $("#menu ul").fadeToggle(400) // The animation time must be the same as the icon
        $("#menu ul").toggleClass("active disabled")
        if($("#menu ul").hasClass("active")) {
            console.log("YAAY")
        } else if ($("#menu ul").hasClass("disabled")) {
            console.log("NOT")
        }
    })
})
