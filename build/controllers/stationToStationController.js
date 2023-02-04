"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStationToStation = exports.updateStationToStation = exports.createStationToStation = exports.getOneStationToStations = exports.getAllStationToStation = void 0;
const handlerFactory_1 = require("./handlerFactory");
const stationToStationTrips_1 = __importDefault(require("../models/stationToStationTrips"));
exports.getAllStationToStation = (0, handlerFactory_1.getAll)(stationToStationTrips_1.default);
exports.getOneStationToStations = (0, handlerFactory_1.getOne)(stationToStationTrips_1.default);
exports.createStationToStation = (0, handlerFactory_1.createOne)(stationToStationTrips_1.default);
exports.updateStationToStation = (0, handlerFactory_1.updateOne)(stationToStationTrips_1.default);
exports.deleteStationToStation = (0, handlerFactory_1.deleteOne)(stationToStationTrips_1.default);
