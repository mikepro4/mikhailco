Template.footer.helpers({
    social: function() {
        return Social.find();
    },

    dcdnt: function () {
        return Social.findOne({network: 'Tumblr'})
    }
});