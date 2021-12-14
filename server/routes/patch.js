const express = require('express');
const router = express.Router();
const config = require('../config/config')
const fs_surfer = require('child_process')
const util = require('util');
const shell = util.promisify(fs_surfer.exec)
const multer = require('multer')
const upload = multer({ dest: config.PDPATCH_PATH })

//router.use(multer({ dest: config.PDPATCH_PATH }))
//router.use(multer)
/*
get all patches
*/
router.get('/', (req, res) => {
    const options = { cwd: config.PDPATCH_PATH }
    const command = "ls -m1 *.pd"

    shell(command, options)
        .then(data => {
            const arr = data.stdout.split("\n")
            const filtered = arr.filter(item => item != '')
            res.json({ patches: filtered })
        })
        .catch(err => res.json(err))

    //res.json(config.NOT_YET_IMPLEMENTED)

})

router.get('/patch', (req, res) => {
    res.json(config.NOT_YET_IMPLEMENTED)
})

router.post('/', upload.single("ciao"), (req, res) => {
    //const options = { root: "public" }
    //res.sendFile("images/test.jpg", options)
    //console.dir(req.files)
    res.json(config.NOT_YET_IMPLEMENTED)
})

module.exports = router;