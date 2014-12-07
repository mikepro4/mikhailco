Template.layout_grid.rendered = function() {

if (Meteor.userId()) {
    $('body').on('keydown',function(event) {
        if(event.keyCode == 71) {
            $('.grid').toggleClass('show_grid');
        }
    });
}

}