//add pages to the page list for accessable pages
const pageList = [
    "index",
    "test"
]

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


//functions you can use in your ts files
function getDoc() {
    let doc = document.querySelector(".app")
    if(doc == null) doc = document.appendChild(document.createElement("div"))
    return doc;
}
function createText(text) {
    let doc = getDoc()
    let p = document.createElement("p")
    p.innerHTML = text
    doc.appendChild(p)
}
function createButton(text, onclick) {
    let doc = getDoc()
    let btn = document.createElement("button")
    btn.innerHTML = text
    btn.onclick = onclick
    doc.appendChild(btn)
}
function createHeading(text, number) {
    let doc = getDoc()
    let h = document.createElement("h" + number.toString())
    h.innerHTML = text
    doc.appendChild(h)
}
function switchPage(page) {
    let url = new URL(window.location.href)
    url.searchParams.set("page", page)
    window.location.href = url.href
}
function setTitle(title) {
    document.title = title
}

//add your own custom functions here