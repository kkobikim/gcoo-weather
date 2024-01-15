const fs = require("fs")
const https = require("https")
const express = require("express")
const app = express()

const key = fs.readFileSync("server.key")
const cert = fs.readFileSync("server.cert")

const server = https.createServer({ key: key, cert: cert }, app)

app.get("/", (req, res) => {
  res.send("Hello World!")
})

server.listen(3000, () => {
  console.log("Listening on https://localhost:3000")
})
