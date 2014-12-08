Template.home.events({
    'click .social_link': function(e, tmpl) {
        var url = $(e.target).closest('a').attr('href');
        var parser = document.createElement('a');
        parser.href = url

        analytics.track({
          user: 'all',
          event: 'Click Social Link',
          properties: {
             url: parser.hostname
          }  
        });
    },

    'click .email_link': function(e, tmpl) {
        analytics.track({
            user: 'all',
            event: 'Click email Link'
        });
    }
})

Template.home.rendered = function() {
    // $('.home_content h1').fitText(1);
}
