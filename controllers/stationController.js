const Station = require('../models/stationModel')
const catchAsync = require('../utils/catchAsync')
const factory = require('./handlerFactory')

exports.getAllStations = factory.getAll(Station);
exports.getStation = factory.getOne(Station, { path: 'reviews' });
exports.createStation = factory.createOne(Station);
exports.updateStation = factory.updateOne(Station);
exports.deleteStation = factory.deleteOne(Station);
