import express from "express"
const stationController = require('../controllers/stationController')

const router = express.Router()

router
    .route('/')
    .get(stationController.getAllStations)
    .post(stationController.createStation)

router
    .route('/:id')
    .get(stationController.getStation)
    .patch(
        stationController.updateStation
    )
    .delete(
        stationController.deleteStation
    );

//TEMPORARY

router
    .route('/stats')
    .get(stationController.getStationStats);

export default router;
