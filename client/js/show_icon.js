Template.showIcon.events({
    'click #showIcon_cancel': function () {

    },
    'click #showIcon_confirm': function (evt) {
        var main_id = Session.get('select_icon');
        var main_sect = TE.find({_id: main_id}).fetch();
        var arrS = main_sect[0].sect;
        // alert(arrS);

    }
});
//
Template.showIcon.helpers({
    whatIcon: function () {
        var main_id = Session.get('select_icon');
        var main_sect = TE.find({_id: main_id}).fetch();
        var arrS = main_sect[0].sect;
        var S = String(arrS);
        return S;
    }
});

// isWhere: function () {
//     var main_id = Session.get('select_icon');
//     var main_sect = TE.find({_id: main_id}).fetch();
//     var arrS = main_sect[0].sect;
//     if (arrS == "where") {
//         return true;
//     }
//     else {
//         return false;
//     }
// }