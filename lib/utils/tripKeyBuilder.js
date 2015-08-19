'use strict';



function buildTripKey (tripID) {
    return tripID.substring(9, tripID.lastIndexOf('.') + 2);
}


module.exports = buildTripKey;
