require("dotenv").config()
const express = require("express")
const app = express()
const products = require("./routes/products")
const connectDb = require("./db/connect")


app.get("/", (req, res)=> {
    res.send("Hello Karan")
})

app.use("/api/products", products)

const start = async ()=> {
    try {
        await connectDb(process.env.url)
        app.listen(3000, ()=> {
            console.log("Connected")
        })
    } catch (error) {
        console.log(error)
    }
}

start()