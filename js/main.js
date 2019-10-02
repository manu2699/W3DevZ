document.getElementsByClassName("title")[0].style.opacity = 0;
document.getElementsByClassName("subtitle")[0].style.opacity = 0;
document.getElementsByClassName("slogan")[0].style.opacity = 0;

anime({
    targets: ".subtitle",
    top: "0px",
    opacity: 1,
    easing: "easeInOutQuad",
    duration: 600,
    complete: function(a) {
        anime({
            targets: ".title",
            top: "0px",
            opacity: 1,
            easing: "easeInOutQuad",
            duration: 600,
            complete: function(a) {
                anime({
                    targets: ".slogan",
                    top: "0px",
                    opacity: 1,
                    easing: "easeInOutQuad",
                    duration: 600,
                })
            }
        })
    }
})


anime.timeline({ loop: true }).add({
    targets: ".scroll-down",
    translateY: "10px",
}).add({
    targets: ".scroll-down",
    translateY: "0px"
})


document.getElementsByClassName("scroll-down")[0].addEventListener("click", (e) => {
    window.scroll({
        top: document.getElementsByClassName("intro")[0].offsetTop,
        left: 0,
        behavior: 'smooth'
    });
})

document.getElementById("we-link").addEventListener("click", (e) => {
    window.scroll({
        top: document.getElementsByClassName("team")[0].offsetTop,
        left: 0,
        behavior: 'smooth'
    });
})