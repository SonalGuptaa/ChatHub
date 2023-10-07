// ChatName
// isgroupchat
// list of users  // Single Chat , Group Chat
// latest Message
// group admin

//Mongoose to create schema,connect to our database and make queries to our database

//Importing Mongoose
const mongoose = require('mongoose');

const chatModel = mongoose.Schema(
    {
        chatName:{type:String, trim:true},
        isGroupChat:{type: Boolean, default:false},
        //Type of array because of single chat and group chat
        users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
        ],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Message",
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    },
    {
        timestamps:true,
    }
    );

//Accessing the model
const Chat = mongoose.model("Chat",chatModel);
module.exports = Chat;