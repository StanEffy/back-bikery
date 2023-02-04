"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStationStats = exports.getAllStationsStats = void 0;
const stationsStatsModel_1 = __importDefault(require("../models/stationsStatsModel"));
const handlerFactory_1 = require("./handlerFactory");
exports.getAllStationsStats = (0, handlerFactory_1.getAll)(stationsStatsModel_1.default);
exports.getStationStats = (0, handlerFactory_1.getOne)(stationsStatsModel_1.default);
