const express = require('express');
const router = express.Router();

// GET /api/authors
router.get('/', (req, res) => {
    res.send('✅ Authors route working!');
});

module.exports = router;
