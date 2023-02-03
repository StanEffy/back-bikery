import {Schema, model} from "mongoose"
import {IStationToStation} from "./types"

//To avoid filtering through station ids and change it with station names
//we can change station name to unique values, clear the table and give it back already filtered
const stationToStationSchema = new Schema<IStationToStation>({
	station_id: {
		type: String
	},
	stations_of_return: {
		type: Object,
	},
	stations_of_arrival: {
		type: Object
	}
})
const StationToStation = model("StationToStation", stationToStationSchema, "station-to-station")

export default StationToStation
