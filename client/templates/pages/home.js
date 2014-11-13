Template.home.events({
    'click .user_phone': function (e) {

        Meteor.call('messageSend', text, function(error) {
            if (error){
                console.log('error')
            } else {
                console.log('ok')
            }
        });

    }
})

Template.home.rendered = function () {
    $('.home_content h1').fitText(2.1);
}