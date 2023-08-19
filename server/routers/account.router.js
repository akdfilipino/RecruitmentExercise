const express = require('express')
const router = express.Router()
const accountService = require('../service/account.service')

router.post('/SignIn', async (req, res) => {
    const { username = null, password = null } = req.body
    var response;
    try {
        response = await accountService.postAccount(username, password)
    }
    catch (error) {
        res.status(404).json({
            message: "Invalid username or password."
        })
    }
    
    if(!response)
    {
        return;
    }
    res.status(200).json(response.data)
    
})

module.exports = router