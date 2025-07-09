
const Author = require('../models/Author');

// Get all authors
const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch authors', error });
    }
};

// Create a new author
const createAuthor = async (req, res) => {
    try {
        const newAuthor = new Author(req.body);
        await newAuthor.save();
        res.status(201).json(newAuthor);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create author', error });
    }
};

module.exports = {
    getAllAuthors,
    createAuthor
};