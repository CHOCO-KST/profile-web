// import "jquery"

let screenHeight = $(window).height()

$(window).scroll(function(){
    let currentPosition = $(this).scrollTop()
    if(currentPosition >= screenHeight){
        $("#float-navbar").addClass("float-navbar-active")
    }else {
        $("#float-navbar").removeClass("float-navbar-active")
    }
})