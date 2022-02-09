const express = require('express');
const router = express.Router();
const fsystem = require('../controllers/filesystem')

router.get('/ip', fsystem.get_ip)

module.exports = router;