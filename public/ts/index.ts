append(createHeading("Pure TS Example!", 1))
append(createText("<b>Hello World</b>"))
append(createButton("Click me to go to page 2!", () => {
   switchPage("test")
}))