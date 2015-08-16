'use strict';

var jsonfile = require('jsonfile'),

    //FIXME: hardcoded date
    indexedSchedulingDataPath = __dirname + '/' + '../MTA_Subway_GTFS_Data/20150614/indexedSchedulingData.json',
    //indexedSpatialDataPath    = __dirname + '/' + '../MTA_Subway_GTFS_Data/20150614/indexedSpatialData.json',

    scheduleData = jsonfile.readFileSync(indexedSchedulingDataPath);
    //spatialData  = jsonfile.readFileSync(indexedSpatialDataPath);



function getGTFSTripIDForTrain (partialTripName) {
    return getTripIDForPartialTripName(partialTripName);
}

function getGTFSTripHeadsignForTrain (partialTripName) {
    return getTripHeadsignForPartialTripName(partialTripName);
}

function getGTFSShapeIDForTrain (partialTripName) {
    return getShapeIDForPartialTripName(partialTripName);
}


// TODO: adapt code according to the parameter change for these.
function getTripIDForPartialTripName (partialTripName) {
    return (scheduleData.trips[partialTripName] && scheduleData.trips[partialTripName].trip_id) || null;
}

function getTripHeadsignForPartialTripName (partialTripName) {
    return ((scheduleData.trips[partialTripName]) && scheduleData.trips[partialTripName].trip_headsign) || null;
}

function getShapeIDForPartialTripName (partialTripName) {
    return ((scheduleData.trips[partialTripName]) && scheduleData.trips[partialTripName].shape_id) || null;
}

function getRouteShortNameForPartialTripName (partialTripName) {
    return ((scheduleData.trips[partialTripName]) && scheduleData.trips[partialTripName].route_short_name) || null;
}
//--------------------------------------------------------------

function getStopName (stopID) {
    var stopData = scheduleData.stops[stopID];

    return (stopData) ? stopData.stop_name : null;
}

module.exports = {
    indexedScheduleData                 : scheduleData                        ,
    indexedSpatialData                  : scheduleData                        ,

    getGTFSTripIDForTrain               : getGTFSTripIDForTrain               ,
    getGTFSTripHeadsignForTrain         : getGTFSTripHeadsignForTrain         ,
    getGTFSShapeIDForTrain              : getGTFSShapeIDForTrain              ,

    getTripIDForPartialTripName         : getTripIDForPartialTripName         ,
    getTripHeadsignForPartialTripName   : getTripHeadsignForPartialTripName   ,
    getShapeIDForPartialTripName        : getShapeIDForPartialTripName        ,
    getRouteShortNameForPartialTripName : getRouteShortNameForPartialTripName ,
    getStopName                         : getStopName                         ,
};
