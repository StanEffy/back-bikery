//@ts-nocheck
// departure: {type: String, required: true},
// return: {type: String, required: true},
// departure_station_id: {type: Number, required: true},
// departure_station_name: {type: String, required: true},
// return_station_id: {type: Number, required: true},
// return_station_name: {type: String, required: true},
// covered_distance_m: {type: Number, required: true},
// duration_sec: {type: Number, required: true}

export enum stationType {
    "departure",
    "return"
}
const searchTopStations = (arrayOfTrips, mainStationType: stationType) => {
    const res = {}
    arrayOfTrips.forEach((trip) => {
        switch (mainStationType) {
            case stationType.departure:
            {
               return res[trip.return_station_name] ? res[trip.return_station_name]++ : res[trip.return_station_name] = 1
            }
            case stationType.return:
            {
                return res[trip.departure_station_name] ? res[trip.departure_station_name]++ : res[trip.departure_station_name] = 1
            }
        }


    })

    return res
}

export default searchTopStations;