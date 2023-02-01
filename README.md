# back-bikery
backend service for bikery app

## What can we get from here?

Backend consists of couple different endpoints which can give you informations about stations, trips between them and some detailed statistics. 
Statistics part implemented partially: the idea is to update it every time user add a new trip. First solution was to count it every request, but it caused nothing but pain.

### Endpoints

**"/api/v1"** - is a common part for every request to a server

#### Stations
    /stations/
**get** give you a list of all stations

**post** add a new station to the database (unique naming to be announced)

    /stations/:id
**get** you get one station by its id

**patch** you can update information about the station

#### statistics
This should be restructured and probably joined with the second part of stats which appeared during second iteration of work on this project.

    /stats/

**get** give you a list of all stations' stats

    /stations/:id
**get** you get one station's stats by its id

#### Stations
    /stationToStation/
**get** give you a list of all station to station trips relations

**post** add a new station to station to the database

    /stationToStation/:id
**get** you get one station by its id

**patch** you can update information about the station to station (not really implemented in handlers)

#### Trips
    /trips/
**get** give you all trips **from** station

**post** add a new trip to the database

    /trips/allTrips/:id
**get** get you all trips ***to*** and ***from*** station

    /trips/:id
**get** give you specific trips **from** station

## Where is it running?

## How to start
npm i
npm start

## How to test
npm run test

or you can build a Docker container based on the Dockerfile. It works locally, but I am currently struggling with uploading it to aws ECS

## Tech used
Mongo with mongoose and express, cause it is still one of the most used solution on the internet. 

## TO DO
- Create a serverless implementation of the backend
- Rewrite types more thoroughly
- Decompose the code to make it easier to be tested
- Create different variants for DB-solution (just to train on)