const mongoose = require("mongoose")

const connectDb = (uri)=> {
    console.log("Connected DB")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDb