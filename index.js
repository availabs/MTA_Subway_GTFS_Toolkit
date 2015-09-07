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
    Wrapper        : require('./lib/Wrapper.js')              ,
    FeedHandler    : require('GTFS_Toolkit').FeedHandler      ,
    tripKeyBuilder : require('./lib/utils/tripKeyBuilder.js') ,
};
