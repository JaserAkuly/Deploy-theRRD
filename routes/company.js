var express = require('express');
var router = express.Router();
var email = require('../app/email');

router.get('/', function(req, res, next) {
    res.render('company/company', {
        title: 'About Us',
        owl: true,
        hero: {
            title: 'theRRD',
            small_title: 'Where things tend to get innovative...'
        }
    });
});

router.get('/careers', function(req, res, next) {
    res.render('company/careers', {
        title: 'Careers',
        hero: {
            title: 'Career',
            small_title: 'default',
            tour_button: true
        }
    });
});

router.get('/affiliate-associations', function(req, res, next) {
    res.render('company/affiliate-associations', {
        title: 'Affiliate & Associations',
        hero: {
            title: 'Affiliate & Associations'
        }
    });
});

router.get('/faq', function(req, res, next) {
    res.render('company/faq', {
        title: 'FAQ',
        hero: {
            title: 'Frequently Asked Questions'
        }
    });
});

router.get('/community', function(req, res, next) {
    res.render('company/community', {
        title: 'Community',
        hero: {
            title: 'Welcome to theRRD Community'
        },
        modals: [
            {
                id: 'communityModal',
                title: 'Community Sign Up',
                url: '',
                form: 'form_community_signup'
            }
        ]
    });
});


router.post('/community', function(req, res, next) {
    var fields = [
        ['communityFirstName', 'First Name: '],
        ['communityLastName', 'Last Name: '],
        ['communityEmail', 'Email: '],
        ['communityNumber', 'Phone Number: '],
        ['communityAddress1', 'Address: '],
        ['communityAddress2', 'Address: '],
        ['communityZip', 'Zip: '],
        ['communityCity', 'City: '],
        ['communityState', 'State: ']

    ];
    email(req, res, 'Neighborhood Email System Request', fields);
});

module.exports = router;
