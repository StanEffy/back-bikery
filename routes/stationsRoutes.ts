import express from "express"
import {
	createStation,
	getAllStations,
	getStation,
	updateStation
} from "../controllers/stationController"

const router = express.Router()
 
router
	.route("/")
	.get(getAllStations)
	.post(createStation)

router
	.route("/:id")
	.get(getStation)
	.patch(
		updateStation
	)

export default router
