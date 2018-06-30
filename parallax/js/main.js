$(document).ready(() => {

    $(window).scroll(() => {
        var topScroll = $(this).scrollTop()

        $(".parallax").css({
            transition: "none",
            backgroundPosition: `0% ${- topScroll * 0.5 + "px"}` // If the parallax will occur on the top just let the value of (y) position positive
        })

        console.log($(".parallax").css("background-position"))
    })

})
