//@ts-nocheck
import APIFeatures from "./utils/apiFeatures";
import searchTopStations, {stationType} from "./utils/searchTopStations";
import Trip from "./models/tripModel";
import Station from "./models/stationModel";
import * as fs from "fs";

const countTrips = async (station_id) => {

    const allResDeparture = new APIFeatures(Trip.find({departure_station_id: station_id}), "")
    const mostDeparture = await allResDeparture.query;

    const statsObject = {
    };

    statsObject.stationsOfReturn = searchTopStations(mostDeparture, stationType.departure);

    const allResArrival= new APIFeatures(Trip.find({return_station_id: station_id}), "")
    const mostArrivals = await allResArrival.query;

    //as it is a tuple second element is always
    statsObject.stationsOfDepartures = searchTopStations(mostArrivals, stationType.return)

    return statsObject;
}

const goThroughStations = async () => {
    const statsApi = new APIFeatures(Station.find({}), "")
    const allStations = await statsApi.query;

    const finalObject = {};

    for (const station of allStations) {
        finalObject[station.FID] = await countTrips(station.FID);
    }

    fs.writeFile(`./topStationsStats.json`, JSON.stringify(finalObject), (err) => {
        if (err) {
            console.error(err);
        }
    });
}

export default goThroughStations;