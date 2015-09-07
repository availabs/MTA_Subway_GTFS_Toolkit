/**
 *
 * @module "MTA_Subway_GTFS_Toolkit.Wrapper"
 *
 * @see [GTFS Documentation]@link{https://developers.google.com/transit/gtfs/reference#stop_timestxt}
 */

'use strict';


var SuperWrapper = require('GTFS_Toolkit').Wrapper;



//========================= The Constructor and prototype ========================= 

/**
 * Creates a gtfs wrapper.
 * @constructor 
 * @augments 'GTFS_Toolkit.Wrapper'
 * @param {date}   scheduledate 
 * @param {string} datadir - the path to the gtfs data directory.
 */
function Wrapper (indexedScheduleData, indexedSpatialData) {
    SuperWrapper.call(this, indexedScheduleData, indexedSpatialData);
}

Wrapper.prototype = Object.create(SuperWrapper.prototype);






//======================== Adding methods to the prototype ======================== 

/**
 * @override
 * "The shape_id field contains an ID that defines a shape for the trip. 
 *  This value is referenced from the shapes.txt file. 
 *  The shapes.txt file allows you to define how a line 
 *  should be drawn on the map to represent a trip.
 * @param {string} tripKey - either trip_id or output of tripKeyBuilder
 * @return {string}
 */
Wrapper.prototype.getShapeIDForTrip = function (tripKey) {
    var startIndex = ((typeof tripKey) === 'string') && (tripKey.lastIndexOf('_') + 1);

    return (startIndex) ? tripKey.substring(startIndex) : null;
};

//=================================================================================



module.exports = Wrapper;

