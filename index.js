/**
 * MTA_Subway_GTFS_Toolkit parses and indexes the MTA Subway GTFS data feed.
 * It also offers a layer of abstration for working with the GTFS data via a wrapper object.
 *
 *
 * @module MTA_Subway_GTFS_Toolkit
 * @summary  Parses, indexes, and offers an abstraction upon the MTA Subway GTFS data feed.
 *
 */

module.exports = {
    GTFS_SchedulingDataIndex : require('./lib/GTFS_SchedulingDataIndex') ,
    GTFS_SpatialDataIndex    : require('./lib/GTFS_SpatialDataIndex')    ,
    GTFS_Wrapper             : require('./lib/GTFS_Wrapper')             ,
};
