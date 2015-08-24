jest.autoMockOff();

describe('WrapperFactory', function() {

    it('Make sure the Factory creates Wrappers.', function() {
        var Factory = require('GTFS_Toolkit').GTFS_WrapperFactory,
            config  = { gtfsDataDir : __dirname + '/data/' },

            factory = new Factory(config),

            wrapper = factory.newWrapperForScheduleDate();

        expect(wrapper).toBeTruthy();
    });
});
