Meteor.startup(function () {
    if (TE.find().count() == 0) {

        TE.insert({part: "main", name: 'location_on', sect: 'where'});
        TE.insert({part: "main", name: 'attach_money', sect: 'where'});
        TE.insert({part: "main", name: 'schedule', sect: 'where'});
        
        // TE.insert({part: "sub", name: 'location_on', sect: 'where'});
        // TE.insert({part: "sub", name: 'location_on', sect: 'where'});
        // TE.insert({part: "sub", name: 'location_on', sect: 'where'});
        // TE.insert({part: "sub", name: 'location_on', sect: 'where'});
        // TE.insert({part: "sub", name: 'location_on', sect: 'where'});
        // TE.insert({part: "sub", name: 'location_on', sect: 'where'});
        // TE.insert({part: "sub", name: 'location_on', sect: 'where'});
        // TE.insert({part: "sub", name: 'location_on', sect: 'where'});

    }
});