const mongoose = require('mongoose');
const Category = require('./models/Category'); // Adjust path if needed
require('dotenv').config(); // 👈 This must come before using process.env

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ MongoDB connection failed:", err));

const categories = ["sports", "entertainment", "business", "food", "technology"];

const seed = async () => {
    for (let name of categories) {
        try {
            await Category.updateOne({ name }, { name }, { upsert: true }); // won't duplicate
            console.log(`✔ Category '${name}' added`);
        } catch (err) {
            console.error(`❌ Failed to add '${name}':`, err.message);
        }
    }

    mongoose.disconnect();
};

seed();
