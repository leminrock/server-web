const express = require('express')
const router = express.Router()
const wifi = require('./wifi')
const patch = require('./patch')
const filesystem = require('./filesystem')

router.use('/wifi', wifi)
router.use('/patch', patch)
router.use('/fsystem', filesystem)

module.exports = router;