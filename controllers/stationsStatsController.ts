import Stats from '../models/stationsStatsModel';
import {getAll, getOne} from './handlerFactory';

export const getAllStationsStats = getAll(Stats);
export const getStationStats = getOne(Stats)
