'use strict';

var jsonfile = require('jsonfile'),

    //FIXME: hardcoded date
    indexedScheduleDataPath = __dirname + '/' + '../MTA_Subway_GTFS_Data/20150614/indexedScheduleData.json',
    indexedSpatialDataPath    = __dirname + '/' + '../MTA_Subway_GTFS_Data/20150614/indexedSpatialData.json',

    indexedScheduleData = jsonfile.readFileSync(indexedScheduleDataPath),
    indexedSpatialData  = jsonfile.readFileSync(indexedSpatialDataPath);



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
    return (indexedScheduleData.trips[partialTripName] && indexedScheduleData.trips[partialTripName].trip_id) || null;
}

function getTripHeadsignForPartialTripName (partialTripName) {
    return ((indexedScheduleData.trips[partialTripName]) && indexedScheduleData.trips[partialTripName].trip_headsign) || null;
}

function getShapeIDForPartialTripName (partialTripName) {
    return ((indexedScheduleData.trips[partialTripName]) && indexedScheduleData.trips[partialTripName].shape_id) || null;
}

function getRouteShortNameForPartialTripName (partialTripName) {
    return ((indexedScheduleData.trips[partialTripName]) && indexedScheduleData.trips[partialTripName].route_short_name) || null;
}
//--------------------------------------------------------------

function getStopName (stopID) {
    var stopData = indexedScheduleData.stops[stopID];

    return (stopData) ? stopData.stop_name : null;
}

module.exports = {
    indexedScheduleData                 : indexedScheduleData                 ,
    indexedSpatialData                  : indexedSpatialData                  ,

    getGTFSTripIDForTrain               : getGTFSTripIDForTrain               ,
    getGTFSTripHeadsignForTrain         : getGTFSTripHeadsignForTrain         ,
    getGTFSShapeIDForTrain              : getGTFSShapeIDForTrain              ,

    getTripIDForPartialTripName         : getTripIDForPartialTripName         ,
    getTripHeadsignForPartialTripName   : getTripHeadsignForPartialTripName   ,
    getShapeIDForPartialTripName        : getShapeIDForPartialTripName        ,
    getRouteShortNameForPartialTripName : getRouteShortNameForPartialTripName ,
    getStopName                         : getStopName                         ,
};
