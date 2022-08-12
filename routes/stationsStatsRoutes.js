const stationsStatsController = require('../controllers/stationsStatsController')
const express = require("express");

const router = express.Router()

router
    .route('/')
    .get(stationsStatsController.getAllStationsStats)

module.exports = router;
