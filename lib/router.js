Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    trackPageView: true
});

Router.map(function() {
    this.route('home', { path: '/' });
});

Router.map(function() {
    this.route('login', { path: '/login' });
});

Router.map(function() {
    this.route('admin', { path: '/admin' })
})

var requireLogin = function() {

    if (! Meteor.userId()) {
        this.render('accessDenied');
    } else {
        this.next();
    }
    
}

Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'admin'});

