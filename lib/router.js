Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.onRun(function(){
    if(Session.equals('AnalyticsJS_loaded', true))
        analytics.page(this.path);
        this.next()
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

