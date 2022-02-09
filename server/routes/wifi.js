const express = require('express');
const router = express.Router();
const config = require('../config/config')
const network = require("node-network-manager")

router.get('/', (req, res) => {
    network
        .getWifiList(true)
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})

router.get('/connected', (req, res) => {
    network
        .getWifiList(true)
        .then((data) => {
            data.forEach(elem => {
                if (elem.inUseBoolean == true) {
                    res.json(elem)
                    return
                }
            })

            res.json({ code: "NOT_CONNECTED" })
        })
        .catch((error) => res.json(error))
})

router.post('/connection', (req, res) => {
    if (!req.body.ssid) {
        res.json({ code: 'MISSING_SSID' })
        return
    }
    if (!req.body.password) {
        res.json({ code: 'MISSING_PASSWORD' })
        return
    }


    res.json(config.NOT_YET_IMPLEMENTED)
})

module.exports = router;