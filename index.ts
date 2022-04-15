const express = require("express")
const path = require("path")
const app = express()
app.use(express.static("public"))

app.get("/js/:filename", (req,res) => {
    //interprets which file is requested and sends the built js file to the client
    res.sendFile(__dirname + "\\public\\ts\\" + req.params.filename)
})

app.listen(3000, () => console.log("listening on 3000"))