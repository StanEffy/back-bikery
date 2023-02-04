"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stationsStatsController_1 = require("../controllers/stationsStatsController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router
    .route("/")
    .get(stationsStatsController_1.getAllStationsStats);
router
    .route("/:id")
    .get(stationsStatsController_1.getStationStats);
exports.default = router;
