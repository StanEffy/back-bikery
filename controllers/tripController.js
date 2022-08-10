const Trip = require('../models/tripModel')
const catchAsync = require('../utils/catchAsync')
const factory = require('./handlerFactory')

exports.getAllStations = factory.getAll(Trip);
exports.getStation = factory.getOne(Trip);
exports.createStation = factory.createOne(Trip);
exports.updateStation = factory.updateOne(Trip);
exports.deleteStation = factory.deleteOne(Trip);
