const Trip = require('../models/tripModel')
const catchAsync = require('../utils/catchAsync')
const factory = require('./handlerFactory')

exports.getAllTripsFromStation = factory.getAll(Trip);
exports.getTrip = factory.getOne(Trip);
exports.createTrip = factory.createOne(Trip);
exports.updateTrip = factory.updateOne(Trip);
exports.deleteTrip = factory.deleteOne(Trip);
