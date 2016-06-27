Router.configure({
    layoutTemplate: 'homeLayout',
    loadingTemplate: 'loading',
});
Router.route('/', {name: 'iconList'});

Router.route('/showIcon', {
    name: 'showIcon'
});
Router.route('/times', {
    name: 'times'
});
Router.route('/where', {
    name: 'where'
});
Router.route('/money', {
    name: 'money'
});
Router.route('/settingLang', {
    name: 'settingLang'
});
Router.route('/thanks', {
    name: 'thanks'
});