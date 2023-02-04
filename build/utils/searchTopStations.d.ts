import { ITrip } from "../models/types";
export declare enum stationType {
    "departure" = 0,
    "return" = 1
}
type ResultObject = {
    [key: string]: number;
};
declare const searchTopStations: (arrayOfTrips: ITrip[], mainStationType: stationType) => ResultObject;
export default searchTopStations;
