"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStation = exports.createStation = exports.getStation = exports.getAllStations = void 0;
const stationModel_1 = __importDefault(require("../models/stationModel"));
const handlerFactory_1 = require("./handlerFactory");
exports.getAllStations = (0, handlerFactory_1.getAll)(stationModel_1.default);
exports.getStation = (0, handlerFactory_1.getOne)(stationModel_1.default);
exports.createStation = (0, handlerFactory_1.createOne)(stationModel_1.default);
exports.updateStation = (0, handlerFactory_1.updateOne)(stationModel_1.default);
