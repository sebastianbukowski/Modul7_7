class Form {
    constructor(form) {
        this.form = form
        this.inputs = this.form.querySelectorAll('.contact-form__item input')
        this.textarea = this.form.querySelector('.contact-form__item textarea')
    }

    addInputsListeners = () => {
        this.inputs.forEach(input => {
            input.addEventListener('keyup', event => this.handleKeyPress(event))
        })
        this.textarea.addEventListener('keyup',event => {
            this.handleKeyPress(event)
        })
    }

    handleKeyPress = (e) => {
        console.log('event.target => ', e.target)
        console.log('event', e.target.value)
        if (e.target.value) e.target.previousElementSibling.style.opacity = 0
        else e.target.previousElementSibling.style.opacity = 1
    }

    init = () => {
        console.log('hello')
        console.log(this.inputs)
        this.addInputsListeners()
    }
}

window.addEventListener('load', () => {
    const forms = document.querySelectorAll(".js-form");
    console.log("forms =>", forms)
    forms.forEach(form => {
        const formItem = new Form(form);
        formItem.init();
    })
})