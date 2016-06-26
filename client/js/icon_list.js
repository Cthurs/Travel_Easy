Template.icon_list.helpers({
    icon_main : function () {
        alert(TE.find({part:'main'}).count());
        return TE.find({part:'main'});
    }
});
