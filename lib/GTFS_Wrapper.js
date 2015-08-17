'use strict';

// TODO: Getting the appropriate GTFS data ?could/should? be handled in here.
//          Based on the tripID passed to the parameters.
//          Should not need to restart this code to handle the transition.
//          but we also don't want to go to disk on every function call.
//
//      ??? A constuctor that takes the schedule date and hands off to local functions ???
//       
//       Should have filters to remove unneeded info. (e.g WKD, SAT, SUN)


var jsonfile = require('jsonfile');


// Gets the latest. Will need to handle feed version effective dates.
function newGTFSWrapperForScheduleDate () { // needs to eventually take scheduleDate as param
    
        //FIXME: hardcoded date. If no date, get latest.
    var indexedScheduleDataPath = __dirname + '/' + '../MTA_Subway_GTFS_Data/20150614/indexedScheduleData.json',
        indexedSpatialDataPath  = __dirname + '/' + '../MTA_Subway_GTFS_Data/20150614/indexedSpatialData.json',

        //TODO: Merge these two.
        indexedScheduleData = jsonfile.readFileSync(indexedScheduleDataPath),
        indexedSpatialData  = jsonfile.readFileSync(indexedSpatialDataPath);
    
    return newGTFSWrapper(indexedScheduleData, indexedSpatialData);
}


// TODO: Should take the schedule date.
function newGTFSWrapper (indexedScheduleData, indexedSpatialData) {

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

    return {
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
}

module.exports = {
    newGTFSWrapperForScheduleDate : newGTFSWrapperForScheduleDate,
};
