// import "jquery"

// Using Waypoint deatect header
    // start
function toggle_active(section, option) {
    let navLinks = $(`.nav-link[href="#${section}"]`)   
    if (option == "add") {
        navLinks.parent().addClass("active-link")
    } else {
        navLinks.parent().removeClass("active-link")
    }
}

function scroll() {
    let tempSectionId;
    const AllSection = $('section[id]');
    var waypoints = AllSection.waypoint(function(direction) {
        if (direction == "down") {
            toggle_active(tempSectionId)
            let currentSectionId = $(this.element).attr("id")
            tempSectionId = currentSectionId;
            toggle_active(currentSectionId,'add')
        }
    }, {
        offset: '10%'
    })
    var waypoints = AllSection.waypoint(function(direction) {
        if (direction == "up") {
            toggle_active(tempSectionId)
            let currentSectionId = $(this.element).attr("id")
            tempSectionId = currentSectionId;
            toggle_active(currentSectionId,'add')
        }
    }, {
        offset: '-10%'
    })
}    
scroll()
    // End

let screenHeight = $(window).height()

$(window).scroll(function(){
    let currentPosition = $(this).scrollTop()
    if(currentPosition >= screenHeight){
        $("#float-navbar").addClass("float-navbar-active")
        $(".bg-shape").addClass("float-bg").addClass("d-block").addClass("d-lg-none")
        $("#menu-btn").addClass("float-btn")
    }else {
        $("#float-navbar").removeClass("float-navbar-active")
        $(".bg-shape").removeClass("float-bg").removeClass("d-block").removeClass("d-lg-none")
        $("#menu-btn").removeClass("float-btn")
    }
})

const soft_bg_touch = document.querySelector('.bg-soft-dark')
const menu_btn = document.getElementById('menu-btn')
const sidebarCloseBtn = document.getElementById('sidebar-close-btn')

soft_bg_touch.addEventListener('click',close_sidebar)
menu_btn.addEventListener('click',open_sidebar)
sidebarCloseBtn.addEventListener('click',close_sidebar)

function close_sidebar() {
    $('#sidebar-div').addClass('d-none').removeClass('d-block')
    $(".sidebar-nav").removeClass('animate__slideInLeft')
}

function open_sidebar() {
    $('#sidebar-div').removeClass('d-none').addClass('d-block')
    $(".sidebar-nav").addClass('animate__slideInLeft')
}

// Loading 
$(window).on('load',function(){
    $('.loading-div').fadeOut(500)
})