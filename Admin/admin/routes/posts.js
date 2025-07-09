/*const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET all blog posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('author').populate('category');
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch posts' });
    }
});

module.exports = router;
*/
/*const Post = require('../models/Post');

// GET all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
            .populate('author', 'username'); // 👈 pulls full Author document (only username field)

        // You now get:
        // post.author = { _id: '...', username: 'admin' }

        res.json(posts);  // or modify the shape if needed
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch posts' });
    }
});
*/
// routes/posts.js

const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
    res.send('✅ Posts route working!');
});

module.exports = router; // ✅ This is required


