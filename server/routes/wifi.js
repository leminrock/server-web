const express = require('express')
const router = express.Router()
const config = require('../config/config')
const os = require('os')

if (os.platform != 'darwin') {
    const network = require("node-network-manager")
    router.get('/', (req, res) => {
        network
            .getWifiList(true)
            .then((data) => res.json(data))
            .catch((error) => res.json(error))
    })

    router.get('/connected', (req, res) => {
        network.getWifiList(true)
            .then((data) => {
                let format_response = undefined

                data.forEach(elem => {
                    if (elem.inUseBoolean == true) {
                        format_response = elem
                    }
                })
                if (format_response)
                    res.json(format_response)
                else
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
}

module.exports = router