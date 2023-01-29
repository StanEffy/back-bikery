import express from "express"
const stationController = require('../controllers/stationToStationController')

const router = express.Router()

router
    .route('/')
    .get(stationController.getAllStationToStation)
    .post(stationController.createStation)

router
    .route('/:id')
    .get(stationController.getOneStationToStations)
    .patch(
        stationController.updateStationToStation
    )
    .delete(
        stationController.deleteStationToStation
    );
export default router;
