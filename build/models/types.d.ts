export interface IStation {
    Name: string;
    Namn: string;
    Nimi: string;
    Osoite: string;
    Stad: string;
    Operaattor: string;
    Kapasiteet: number;
    Kaupunki: string;
    x: number;
    y: number;
    FID: number;
    ID: number;
}
export interface IStationStats {
    departure_station_name: string;
    departure_station_id: number;
    departures: number;
    mean_distance: number;
    median_distance: number;
    mean_duration: number;
    median_durarion: number;
    arrivals: number;
    ID?: string;
}
export interface ITrip {
    departure: string;
    return: string;
    departure_station_id: number;
    departure_station_name: string;
    return_station_id: number;
    return_station_name: string;
    covered_distance_m: number;
    duration_sec: number;
    ID: number;
    FID: number;
}
export interface IStationToStation {
    station_id: string;
    stations_of_return: object;
    stations_of_arrival: object;
    ID?: string;
}
