import express from "express"
import {
	createStationToStation,
	getAllStationToStation,
	getOneStationToStations,
	updateStationToStation
} from "../controllers/stationToStationController"

const router = express.Router()
 
router
	.route("/")
	.get(getAllStationToStation)
	.post(createStationToStation)

router
	.route("/:station_id")
	.get(getOneStationToStations)
	.patch(
		updateStationToStation
	)
export default router
