import Station from '../models/stationModel';
import {getAll, getOne, createOne, updateOne, deleteOne} from './handlerFactory';

export const getAllStations = getAll(Station);
export const getStation = getOne(Station);
export const createStation = createOne(Station);
export const updateStation = updateOne(Station);
export const deleteStation = deleteOne(Station);