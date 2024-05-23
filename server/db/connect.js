const mongoose = require("mongoose")

try {
    mongoose.connect(process.env.MONGO_URI)
} catch (error) {
    console.log(error)    
}

const userSchema = mongoose.Schema({
    username : String,
    room : String,
    socket_id : String
});

const messageSchema = mongoose.Schema({
    message : String,
    username : String,
    room : String,
    createdTime : String
})

const user = mongoose.model("chatAppUser",userSchema)

const message = mongoose.model("messages",messageSchema)


module.exports = {
    user,
    message
}


