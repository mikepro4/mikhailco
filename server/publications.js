Meteor.publish('user', function() {
    return User.find();
});

Meteor.publish('social', function() {
    return Social.find();
});