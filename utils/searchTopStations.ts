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

export default searchTopStations