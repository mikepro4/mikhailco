Template.home.events({
    'click .contact': function (e) {
        console.log(e);
    }
})

Template.home.rendered = function () {
    $('.home_content h1').fitText(2.1);
}