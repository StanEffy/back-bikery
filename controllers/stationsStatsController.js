const StationStats = require('../models/stationsStatsModel')
const factory = require('./handlerFactory')

exports.getAllStationsStats = factory.getAll(StationStats);
