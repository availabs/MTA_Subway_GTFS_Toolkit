'use strict';

var gtfsSpatialDataIndexer = require('GTFS_Toolkit').spatialDataIndexer,

    tripKeyBuilder = require('./utils/tripKeyBuilder');



function run (config) {
    config.tripKeyBuilder = config.tripKeyBuilder || tripKeyBuilder;

    gtfsSpatialDataIndexer.run(config);
}


module.exports = { 
    run : run ,
};
