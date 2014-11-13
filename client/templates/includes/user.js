Template.user.helpers({
    user: function() {
        return User.findOne();
    }
});