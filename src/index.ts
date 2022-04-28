class Helper {

    public component () : HTMLDivElement {
        const element = document.createElement('div')
        element.innerHTML = 'Hello, I am a template.'
        return element
    }
}
document.body.appendChild(new Helper().component())

class New {

    public component () : HTMLElement {
        const element = document.createElement('H1')
        element.innerHTML = 'This is how you would do it'
        return element
        // In this case it is just an HTML Element that is being created. 
    }
}
document.body.appendChild(new New().component())