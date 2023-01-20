import {Schema, model} from 'mongoose';
import {ITrip} from "./types";

const tripSchema = new Schema<ITrip>({
    departure: {type: String, required: true},
    return: {type: String, required: true},
    departure_station_id: {type: Number, required: true},
    departure_station_name: {type: String, required: true},
    return_station_id: {type: Number, required: true},
    return_station_name: {type: String, required: true},
    covered_distance_m: {type: Number, required: true},
    duration_sec: {type: Number, required: true}
})
const Trip = model('Trip', tripSchema, "trips");

export default Trip;
