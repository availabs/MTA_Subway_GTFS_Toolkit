'use strict';

var gtfsScheduleDataIndexer = require('GTFS_Toolkit').scheduleDataIndexer,

    tripKeyBuilder = require('./utils/tripKeyBuilder');



function run (config) {
    config.tripKeyBuilder = config.tripKeyBuilder || tripKeyBuilder;

    gtfsScheduleDataIndexer.run(config);
}


module.exports = { 
    run : run ,
};
