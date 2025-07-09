/*const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    /*name: {
        type: String,
        required: true,
        unique: true,
    },
    title: String,
    content: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // 👈 very important
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
*/
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // so same name can't be added twice
        trim: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);

