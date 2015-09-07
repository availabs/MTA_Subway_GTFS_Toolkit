'use strict';

// Copied this from MTA_Subway_SIRI_Server. Not all entries make sense here.

var path           = require('path'),

    tripKeyBuilder = require('./lib/utils/tripKeyBuilder'),

    dataDirPath    = null;

module.exports = {
    gtfsConfigFilePath          : __filename                        ,

    latestDataURL               : undefined                         ,

    tripKeyBuilder              : tripKeyBuilder                    ,

    dataDirPath                 : dataDirPath                       ,
    tmpDirPath                  : path.join(dataDirPath, 'tmp')     ,

    indexedScheduleDataFileName : 'indexedScheduleData.json'        ,
    indexedSpatialDataFileName  : 'indexedSpatialData.json'         ,
    indexingStatisticsFileName  : 'indexingStatistics.json'         ,
};
