const network = require("node-network-manager")

exports.get_ip = (req, res) => {
    /*
    network.getIPv4()
        .then(data => {
            console.log(data)
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
        */
    /*
    network.getConnectionProfilesList(false)
        .then((data) => {
            const ethernet = data.find((item) => item.TYPE === "ethernet");
            const wifi = data.find((item) => item.TYPE === "wifi");
            network
                .getDeviceInfoIPDetail(ethernet.DEVICE)
                .then((data) => console.log(data))
                .catch((error) => console.log(error));
            network
                .getDeviceInfoIPDetail(wifi.DEVICE)
                .then((data) => console.log(data))
                .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
        */

    network.getConnectionProfilesList(false)
        .then((data) => {
            const filtered = data.filter(d => d.DEVICE != '--')
            const out = []

            filtered.forEach(elem => {
                network.getDeviceInfoIPDetail(elem.DEVICE)
                    .then(singleton => out.push(singleton))
                    .catch(err => console.log(err))
            })

            console.log("out:", out)
        })
        .catch((error) => console.log(error));

    //res.send("done")
}