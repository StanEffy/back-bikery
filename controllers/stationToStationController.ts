import {getAll, getOne, createOne, updateOne, deleteOne} from './handlerFactory';
import StationToStation from "../models/stationToStationTrips";

export const getAllStationToStation = getAll(StationToStation);
export const getOneStationToStations = getOne(StationToStation);
export const createStationToStation = createOne(StationToStation);
export const updateStationToStation = updateOne(StationToStation);
export const deleteStationToStation = deleteOne(StationToStation);