Template.nav.main_selected = function () {
   return Session.equals('session_color', "1")? 'orange600':"";
};

Template.nav.events({
    'click .button-collapse':function () {
        $(".button-collapse").sideNav();
    },
    'click .medium':function () {
        Session.set('session_color', "1");
    }
});