"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stationToStationController_1 = require("../controllers/stationToStationController");
const router = express_1.default.Router();
router
    .route("/")
    .get(stationToStationController_1.getAllStationToStation)
    .post(stationToStationController_1.createStationToStation);
router
    .route("/:station_id")
    .get(stationToStationController_1.getOneStationToStations)
    .patch(stationToStationController_1.updateStationToStation);
exports.default = router;
