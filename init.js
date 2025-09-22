const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => {
        console.log(err);
    })
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Navya",
        to: "Shreya",
        msg: "Good morning",
        created_at: new Date()
    },
    {
        from: "Anju",
        to: "Deepak",
        msg: "Did shrinath sir call you?",
        created_at: new Date()
    },
    {
        from: "Babu",
        to: "Sonal",
        msg: "Got to go bye!",
        created_at: new Date()
    },
    {
        from: "Amin",
        to: "Diya",
        msg: "Pagal hogayi kya?!",
        created_at: new Date()
    },
    {
        from: "Naveen",
        to: "Karuna",
        msg: "Dude CSK won!",
        created_at: new Date()
    }
];

Chat.insertMany(allChats);
