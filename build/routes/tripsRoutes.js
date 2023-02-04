"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tripController_1 = require("../controllers/tripController");
const router = (0, express_1.Router)();
router
    .route("/")
    .get(tripController_1.getAllTripsFromStation)
    .post(tripController_1.createTrip);
router
    .route("/allTrips/:stationId")
    .get(tripController_1.getAllTripsFromStation);
router
    .route("/:id")
    .get(tripController_1.getTrip);
exports.default = router;
