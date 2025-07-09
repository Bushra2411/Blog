require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const authorRoutes = require('./routes/authorRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Use routes
app.use('/api/authors', authorRoutes);
app.use('/api/admin', adminRoutes);

// ** Add these two lines here **
/*console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
}).catch(err => console.log(err));
*/
app.use('/api/categories', require('./routes/categories'));
app.use('/api/authors', require('./routes/authors'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/reports', require('./routes/reports'));

console.log('MONGO_URL:', process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ MongoDB connected');
    app.listen(process.env.PORT, () => {
        console.log(`🚀Server running on port ${process.env.PORT}`);
    });
}).catch(err => console.log(err));