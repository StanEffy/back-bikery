import {ITrip} from "../models/types"

export enum stationType {
    "departure",
    "return"
}

type ResultObject = {
	[key: string]: number
}


//You are not being able to know all the stations keys because they can be added by user/admin
const searchTopStations = (arrayOfTrips: ITrip[], mainStationType: stationType): ResultObject => {
	const res: ResultObject = {}
	arrayOfTrips.forEach((trip: ITrip) => {
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