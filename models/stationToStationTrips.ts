import {Schema, model} from 'mongoose';
import {IStationToStation} from "./types";

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
const StationToStation = model('StationToStation', stationToStationSchema, 'station-to-station');

export default StationToStation;
