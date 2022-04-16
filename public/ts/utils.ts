//add pages to the page list for accessable pages
const pageList = [
    "index",
    "test"
]

//PureTS interpreter start
const params = new URLSearchParams(window.location.search)
let page = params.get("page") !== null ? params.get("page") : 'index';
console.log("current page is " + page)
pageList.forEach(p => {
    if(p == page) {
        let script = document.createElement("script")
        script.src = `./js/${p}.js`
        document.head.appendChild(script)
    }
})
//PureTS interpreter end

//functions you can use in your ts files
function getDoc() {
    let doc = document.querySelector(".app")
    if(doc == null) doc = document.appendChild(document.createElement("div"))
    return doc;
}
function createText(text) {
    let p = document.createElement("p")
    p.innerHTML = text
    return p
}
function createButton(text, onclick) {
    let btn = document.createElement("button")
    btn.innerHTML = text
    btn.onclick = onclick
    return btn
}
function createHeading(text, number) {
    let h = document.createElement("h" + number.toString())
    h.innerHTML = text
    return h
}
function switchPage(page) {
    let url = new URL(window.location.href)
    url.searchParams.set("page", page)
    window.location.href = url.href
}
function setTitle(title) {
    document.title = title
}
function setBackground(color) {
    document.body.style.backgroundColor = color
}
function createFavicon(src) {
    let link = document.createElement("link")
    link.rel = "icon"
    link.href = src
    document.head.appendChild(link)
}
function createImage(src) {
    let img = document.createElement("img")
    img.src = src
    return img
}
function createStyle(style) {
    let styleElement = document.createElement("style")
    styleElement.innerHTML = style
    document.head.appendChild(styleElement)
    return styleElement
}
function append(element) {
    let app = document.querySelector(".app")
    if(!app) app = document.body.appendChild(document.createElement("div"))
    app.appendChild(element)
}
function specialAppend(element, parent) {
    parent.appendChild(element)
}
function appendMultiple(array) {
    array.forEach(e => {
        document.body.appendChild(e)
    })
}
function appendBody(element) {
    document.body.appendChild(element)
}
function createDiv(className) {
    let div = document.createElement("div")
    div.className = className
    return div
}
function setLocalStorage(name, data) {
    if(data == null) data = ""
    //check if data is a json object
    if(typeof data == "object") data = JSON.stringify(data)
    localStorage.setItem(name, data)
}
function getLocalStorage(name) {
    let data = localStorage.getItem(name)
    if(data == null) return null
    //check if data is a json object
    if(data.startsWith("{") || data.startsWith("[")) return JSON.parse(data)
    return data
}
function removeLocalStorage(name) {
    localStorage.removeItem(name)
}
function getElementById(id) {
    return document.getElementById(id)
}
function getElementByClass(className) {
    return document.querySelector("." + className)
}
function getElementsByTag(tag) {
    return document.getElementsByTagName(tag)
}
class PTS {
    public element: any = null;
    constructor(tag, autoAppend) {
        if(!autoAppend) autoAppend = true
        let doc = getDoc()
        this.element = document.createElement(tag)
        if(autoAppend == true) doc.appendChild(this.element)
        else return this.element
    }
    setInnerHtml(html) {
        this.element.innerHTML = html
    }
    getInnerHtml() {
        return this.element.innerHTML
    }
    getElement() {
        return this.element
    }
    addAttribute(name, value) {
        this.element.setAttribute(name, value)
    }
    removeAttribute(name) {
        this.element.removeAttribute(name)
    }
    returnProperty(name) {
        return this.element[name]
    }
    setProperty(name, value) {
        this.element[name] = value
    }
    appendChild(child) {
        this.element.appendChild(child)
    }
    appendTo(parent) {
        parent.appendChild(this.element)
    }
}

//add your own custom functions here