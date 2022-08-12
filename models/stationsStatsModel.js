const mongoose = require('mongoose');

//there is a spelling mistake in db
//when have time I fix it and obv forget to delete this comment and edit model as well

const stationsStatsModel = new mongoose.Schema({
    departure_station_name: String,
    departure_station_id: Number,
    departures: Number,
    mean_distance: Number,
    median_distance: Number,
    mean_duration: Number,
    median_durarion: Number,
    arrivals: Number
})

const StationsStats = mongoose.model('StationsStats', stationsStatsModel)

module.exports = StationsStats
