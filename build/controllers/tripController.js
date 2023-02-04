"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTrip = exports.updateTrip = exports.createTrip = exports.getTrip = exports.getAllTripsFromStation = void 0;
const tripModel_1 = __importDefault(require("../models/tripModel"));
const handlerFactory_1 = require("./handlerFactory");
exports.getAllTripsFromStation = (0, handlerFactory_1.getAll)(tripModel_1.default);
exports.getTrip = (0, handlerFactory_1.getOne)(tripModel_1.default);
exports.createTrip = (0, handlerFactory_1.createOne)(tripModel_1.default);
exports.updateTrip = (0, handlerFactory_1.updateOne)(tripModel_1.default);
exports.deleteTrip = (0, handlerFactory_1.deleteOne)(tripModel_1.default);
