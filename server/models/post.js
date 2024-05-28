const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const postSchema = Schema({
    title: {
        type: String,
        required: true
    },
    numOfNodes: {
        type: Number,
        required: true
    },
    content: {
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);