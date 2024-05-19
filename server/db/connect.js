const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI)

const messageSchema = mongoose.Schema({
    message : {
        type : String
    },
    room : {
        type : String
    },
    createdTime : {
        type : Date
    },
    username :{
        type : String
    }
});

const messageTable = mongoose.model("ChatAppMessages",messageSchema)

module.exports = messageTable