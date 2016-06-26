Router.configure({
    layoutTemplate: 'icon_list',
    loadingTemplate: 'loading',
});
Router.route('/', {name: 'home'});

Router.route('/graph', {
    name: 'graph'
});