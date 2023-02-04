"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//there is a spelling mistake in db
//when have time I fix it and obv forget to delete this comment and edit model as well
const stationsStatsModel = new mongoose_1.Schema({
    departure_station_name: { type: String, required: true },
    departure_station_id: { type: Number, required: true },
    departures: { type: Number, required: true },
    mean_distance: { type: Number, required: false },
    median_distance: { type: Number, required: true },
    mean_duration: { type: Number, required: false },
    median_durarion: { type: Number, required: true },
    arrivals: { type: Number, required: true },
});
const Stats = (0, mongoose_1.model)("Stats", stationsStatsModel);
exports.default = Stats;
