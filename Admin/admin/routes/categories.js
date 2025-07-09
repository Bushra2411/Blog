const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('✅ Categories route working!');
});

module.exports = router;
