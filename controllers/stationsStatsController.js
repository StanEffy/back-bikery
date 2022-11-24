const Stats = require('../models/stationsStatsModel')
const factory = require('./handlerFactory')

exports.getAllStationsStats = factory.getAll(Stats);
exports.getStationStats = factory.getOne(Stats)
