var express = require('express');
var router = express.Router();
var email = require('../app/email');

router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'theRRD',
        owl: true,
        hero: {
            title: 'theRRD',
            small_title: 'default',
            tour_button: true
        },
        modals: [
            {
                id: 'getMoreInfoModal',
                title: 'Get A Demo Today!',
                url: '',
                form: 'form_index_get_more_info'
            }
        ]
    });
});

router.post('/', function(req, res, next) {
    var fields = [
        ['demoCustomerFirstName', 'First Name: '],
        ['demoCustomerLastName', 'Last Name: '],
        ['demoCustomerEmail', 'Email: '],
        ['demoCustomerNumber', 'Phone Number: '],
        ['demoSubject', 'Subject: ']
    ];
    email(req, res, 'Customer Demo Request', fields);
});

router.post('/contact_us', function(req, res, next) {
    var fields = [
        ['customerFirstName', 'First Name: '],
        ['customerLastName', 'Last Name: '],
        ['customerEmail', 'Email: '],
        ['customerNumber', 'Phone Number: '],
        ['customerSubject', 'Subject: '],
        ['customerMessage', 'Message: ']
    ];
    email(req, res, 'Contact Us Request', fields);
});

router.get('/request-success', function(req, res, next) {
    res.render('email/success', {
        hero: {
            title: 'Thank you',
            small_title: 'Your request has been received. A representative will be in contact with you shortly.'
        },
        footer_without_top_margin: true
    });
});

router.get('/request-error', function(req, res, next) {
    res.render('email/error');
});

module.exports = router;
