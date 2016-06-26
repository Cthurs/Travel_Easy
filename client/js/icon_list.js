Template.icon_list.helpers({
    icon_main : function () {
        return TE.find({part:'main'});
    },

    icon_sub: function(){
        return TE.find({part:'sub'});
    }
});

Template.icon.maybe_selected = function(){
    return Session.equals('select_icon', this._id)? 'orange600':"";
}
Template.sub_icon.sub_maybe_selected = function(){
    return Session.equals('sub_select_icon', this._id)? 'orange600':"";
}
Template.icon_list.events({
   'click #main_icon_1':function(){
       Session.set('select_icon', this._id);
   },
    'click #sub_icon_1':function(){
        Session.set('sub_select_icon', this._id);
    }
});

Template.show_icon.helpers({
    show: function(){
        var Icon_id =Session.get('select_icon');
        return TE.find({_id:Icon_id});
    },
    sub_show: function(){
        var Icon_id =Session.get('sub_select_icon');
        return TE.find({_id:Icon_id});
    }
});


