"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const tripSchema = new mongoose_1.Schema({
    departure: { type: String, required: true },
    return: { type: String, required: true },
    departure_station_id: { type: Number, required: true },
    departure_station_name: { type: String, required: true },
    return_station_id: { type: Number, required: true },
    return_station_name: { type: String, required: true },
    covered_distance_m: { type: Number, required: true },
    duration_sec: { type: Number, required: true }
});
const Trip = (0, mongoose_1.model)("Trip", tripSchema, "trips");
exports.default = Trip;
