Router.configure({
    layoutTemplate: 'homeLayout',
    loadingTemplate: 'loading',
});
Router.route('/', {name: 'iconList'});

Router.route('/showIcon', {
    name: 'showIcon'
});