const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
    
    tweet: {
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
        }
    ],
    answers: [
        {
            avatar: {
                type: mongoose.Schema.Types.ObjectId,
            },
            comment: {
                type: String
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now // Default value will be the current date and time
    }
});

module.exports = mongoose.model("Post", PostSchema);