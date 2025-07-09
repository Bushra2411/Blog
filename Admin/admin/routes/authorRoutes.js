const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');
const Author = require('../models/Author');

router.get('/', authorController.getAllAuthors);
router.post('/', authorController.createAuthor);

// GET all authors
router.get('/', async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch authors' });
    }
});


module.exports = router;