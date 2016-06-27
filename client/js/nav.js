Template.nav.events({
    'click .button-collapse':function () {
        $(".button-collapse").sideNav();
    }
});
Template.settingLang.onRendered(function () {
    $('select').material_select();
});