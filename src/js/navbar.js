let scrollState = 0;

let navClasses = document.getElementById('navBar').classList;

const scrollTop = function() {
    return window.scrollY;
};

const scrollDetect = function(home, down, up) {
// Current scroll position
    let currentScroll = scrollTop();
    if (scrollTop() === 0) {
        home();
    } else if (currentScroll > scrollState) {
        down();
    } else {
        up();
}

scrollState = scrollTop();
};

function homeAction() {
    if(navClasses.value.includes('open')) navClasses.remove('open')
    if(navClasses.value.includes('collapse')) navClasses.remove('collapse')
}

function downAction() {
    navClasses.remove('open');
    navClasses.add('collapse');
}

function upAction() {
    navClasses.remove('collapse');
    navClasses.add('open');
}

window.addEventListener("scroll", function() {
    scrollDetect(homeAction, downAction, upAction);
});


