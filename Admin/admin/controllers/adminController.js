/*const Author = require('../models/Author');
const Category = require('../models/Category');
const Post = require('../models/Post');
const Report = require('../models/Report'); // Create this later if needed

exports.getDashboardStats = async (req, res) => {
    try {
        const authors = await Author.countDocuments();
        const categories = await Category.countDocuments();
        const posts = await Post.countDocuments();
        const reports = await Report.countDocuments(); // Optional for now

        res.json({ authors, categories, posts, reports });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to get dashboard stats" });
    }
};*/
const Author = require('../models/Author');
const Category = require('../models/Category');
const Post = require('../models/Post');
const Report = require('../models/Report');

/*exports.getDashboardStats = async (req, res) => {
    try {
        const authors = await Author.countDocuments();
        const categories = await Category.countDocuments();
        const posts = await Post.countDocuments();
        const reports = await Report.countDocuments();

        res.json({ authors, categories, posts, reports });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to get dashboard stats" });
    }
};

*/
/*exports.getDashboardStats = async (req, res) => {
    try {
        const authors = await Author.countDocuments();
        const categoriesList = await Category.find(); // log full list
        console.log('Categories:', categoriesList);
        const categories = categoriesList.length;

        const posts = await Post.countDocuments();
        const reports = await Report.countDocuments();

        res.json({ authors, categories, posts, reports });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to get dashboard stats" });
    }
};
*/
exports.getDashboardStats = async (req, res) => {
    try {
        const authors = await Author.countDocuments();
        const posts = await Post.countDocuments();
        const reports = await Report.countDocuments();

        const allCategories = await Category.find(); // fetch all
        console.log("All Categories:", allCategories); // 🔍 debug here
        const categories = allCategories.length;
     
        res.json({ authors, categories, posts, reports });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to get dashboard stats" });
    }
};