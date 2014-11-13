process.env.MAIL_URL="smtp://xxx%40gmail.com:yyy@smtp.gmail.com:465/";

Meteor.methods({
    messageSend: function(text) {
        Email.send({
            from: "",
            to: "",
            subject: "Contacting",
            text: text
        });
    }
});