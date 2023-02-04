"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//To avoid filtering through station ids and change it with station names
//we can change station name to unique values, clear the table and give it back already filtered
const stationToStationSchema = new mongoose_1.Schema({
    station_id: {
        type: String
    },
    stations_of_return: {
        type: Object,
    },
    stations_of_arrival: {
        type: Object
    }
});
const StationToStation = (0, mongoose_1.model)("StationToStation", stationToStationSchema, "station-to-station");
exports.default = StationToStation;
