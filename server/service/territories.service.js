const axios = require('axios')
const config = require('dotenv').config

class TerritoriesService {

    constructor() {
        config()
        this.BASE_ENDPOINT = process.env.BASE_ENDPOINT || "http://localhost:3001"
    }

    async getTerritories(){
        const url = `${this.BASE_ENDPOINT}/Territories/All`
        const options = {
            method: 'GET',
        }

        const res = await axios.get(url).then(res => res)

        return res.data
    }
}

module.exports = new TerritoriesService();