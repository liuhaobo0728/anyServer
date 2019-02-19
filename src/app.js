const http = require('http');
const chalk = require('chalk');
const path = require('path')
const config = require("./config/defaultConfig");
const route = require('./helper/route')
const openUrl = require('./helper/openUrl');

class Server { 
    constructor(config) {
        this.config = Object.assign({}, config, config)
    }

    start() {
        const server = http.createServer((req,res) => {
            const url = req.url;
            const filePath = path.join(this.config.root, url)
            route(req, res, filePath, this.config)
        })
        server.listen(this.config.port, this.config.hostName, () => {
            const addr = `http://${this.config.hostName}:${this.config.port}`;
            console.log(`server start at ${chalk.green(addr)}`);
            openUrl(addr)
            
        })
    }
}

module.exports = Server


