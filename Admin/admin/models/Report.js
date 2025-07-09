const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    reportedBy: {
        type: String,
        required: true,
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    },
}, { timestamps: true });

module.exports = mongoose.model('Report', reportSchema);
