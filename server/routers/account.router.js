const express = require('express')
const router = express.Router()
const accountService = require('../service/account.service')

router.post('/SignIn', async (req, res) => {
    try {
        const { username = null, password = null } = req.body
        const response = await accountService.postAccount(username, password)
        res.status(200).json(response.data)
    }
    catch (error) {
        res.status(404).json({
            message: "Invalid username or password."
        })
    }
})

module.exports = router