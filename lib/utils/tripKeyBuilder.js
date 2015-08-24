'use strict';



function buildTripKey (tripID) {
    return tripID ? tripID.substring(9, tripID.lastIndexOf('.') + 2) : null;
}


module.exports = buildTripKey;
