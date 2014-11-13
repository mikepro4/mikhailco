if (User.find().count() === 0) {
    User.insert({
        firstName: 'Mikhail',
        lastName: 'Proniushkin',
        position: 'UI designer, front-end developer',
        email: 'contact@mikhail.co',
        phone: '1.718.510.4402'
    });
}

if (Social.find().count() === 0) {
    Social.insert({
        network: 'Dribbble',
        url: 'https://dribbble.com/mikhailp'
    });

    Social.insert({
        network: 'Github',
        url: 'https://github.com/mikepro4'
    });

    Social.insert({
        network: 'Codepen',
        url: 'http://codepen.io/mikepro4'
    });

    Social.insert({
        network: 'Tumblr',
        url: 'http://dcdnt.net/'
    });

    Social.insert({
        network: 'Linkedin',
        url: 'http://www.linkedin.com/in/mikepro4'
    });

//    Social.insert({
//        network: 'Angellist',
//        url: 'https://angel.co/mikepro'
//    });

    Social.insert({
        network: 'Soundcloud',
        url: 'https://soundcloud.com/dhbound'
    });

//    Social.insert({
//        network: 'Splice',
//        url: 'https://splice.com/mikhail'
//    });
}