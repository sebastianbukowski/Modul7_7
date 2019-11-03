class Hamburger {
    constructor(menuContent) {
        this.menu = menuContent
        this.hamburger = document.querySelector('.hamburger')
    }

    addHamburgerListener = () => {
        this.hamburger.addEventListener('click', event => {
            console.log('hello from listener')
            console.log('menu => ', this.menu[0].classList)
            this.menu[0].classList.toggle('hamburger-open')
        })
    }
    init = () => {
        console.log('hello from hamburger')
        // console.log(this.inputs)
        this.addHamburgerListener()
    }
}

window.addEventListener('load', () => {
    const menuContent = document.querySelectorAll(".header__nav");
    console.log('nav => ', menuContent)
    if(!menuContent) return
    const hamburger = new Hamburger(menuContent);
    hamburger.init()
})