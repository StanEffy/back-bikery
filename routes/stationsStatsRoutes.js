const statsController = require('../controllers/stationsStatsController')
const express = require("express");

const router = express.Router()

router
    .route('/')
    .get(statsController.getAllStationsStats)
router
    .route('/:id')
    .get(statsController.getStationStats)

module.exports = router;
