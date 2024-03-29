const express = require('express');
const router = express.Router();
const territoryService = require('../service/territories.service')


router.get('/All', async (req, res) => {
    try {
        const territories = await territoryService.getTerritories()
        await res.status(200).json({
            data: territories.data
        })
    } catch (error) {
        res.status(500).json({
            message: "getAllTerritories - Internal Server Error"
        })
    }
})  

module.exports = router;
