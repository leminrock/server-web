const express = require('express');
const router = express.Router();
const wifi = require('./wifi')
const patch = require('./patch')

router.use('/wifi', wifi)
router.use('/patch', patch)

module.exports = router;