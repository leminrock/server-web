const express = require('express');
const router = express.Router();
const config = require('../config/config')
const fs_surfer = require('child_process')
const util = require('util');
const shell = util.promisify(fs_surfer.exec)
const multer = require('multer')

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
    console.log(req.query)
    if (!req.query.filename) {
        res.json({ code: "MISSING_FILENAME" })
        return
    }

    const { filename } = req.query
    console.log("IL FILE E':", filename)
    res.download(`${config.PDPATCH_PATH}/${filename}`)
})



const storage = multer.diskStorage({
    destination: function(req, file, dest) {
        dest(null, config.PDPATCH_PATH)
    },
    filename: function(req, file, dest) {
        //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        dest(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

router.post('/upload', upload.single("filename"), (req, res) => {
    console.log(req.body)
    console.log(req.file)
    res.json({
        filename: req.file.filename,
        location: config.PDPATCH_PATH,
        size: req.file.size,
        mimetype: req.file.mimetype
    })
})

module.exports = router;
