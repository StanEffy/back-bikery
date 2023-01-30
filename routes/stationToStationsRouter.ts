import express from "express";
const stationToStationController = require('../controllers/stationToStationController')

const router = express.Router()

router
    .route('/')
    .get(stationToStationController.getAllStationToStation)
    .post(stationToStationController.createStationToStation)

router
    .route('/:station_id')
    .get(stationToStationController.getOneStationToStations)
    .patch(
        stationToStationController.updateStationToStation
    )
    .delete(
        stationToStationController.deleteStationToStation
    );
export default router;
