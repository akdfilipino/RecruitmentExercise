const axios = require('axios')
const config = require('dotenv').config

class AccountService {

    constructor() {
        config()
        this.BASE_ENDPOINT = process.env.BASE_ENDPOINT || "http://localhost:3001"
    }

    async postAccount(username, password) {
        const url = `${this.BASE_ENDPOINT}/Account/SignIn`
        try{
            const res = await axios.post(
                url, 
                {
                    username: username,
                    password: password 
                }
            )    
            return res
        }
        catch(error){
            throw error
        }
    }
}

module.exports = new AccountService();