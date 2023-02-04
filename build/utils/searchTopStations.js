"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stationType = void 0;
var stationType;
(function (stationType) {
    stationType[stationType["departure"] = 0] = "departure";
    stationType[stationType["return"] = 1] = "return";
})(stationType = exports.stationType || (exports.stationType = {}));
//You are not being able to know all the stations keys because they can be added by user/admin
const searchTopStations = (arrayOfTrips, mainStationType) => {
    const res = {};
    arrayOfTrips.forEach((trip) => {
        switch (mainStationType) {
            case stationType.departure:
                {
                    return res[trip.return_station_name] ? res[trip.return_station_name]++ : res[trip.return_station_name] = 1;
                }
            case stationType.return:
                {
                    return res[trip.departure_station_name] ? res[trip.departure_station_name]++ : res[trip.departure_station_name] = 1;
                }
        }
    });
    return res;
};
exports.default = searchTopStations;
