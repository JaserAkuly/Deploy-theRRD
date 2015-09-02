var express = require('express');
var router = express.Router();
var email = require('../app/email');



router.get('/error', function(req, res, next) {
    res.render('email/error', {
        title: 'Error',
        hero: {
            title: 'Oops, Something Went Wrong. Please Try Again.'
        }
    });
});

router.get('/success', function(req, res, next) {
    res.render('email/success', {
        title: 'Thank You',
        hero: {
            title: 'Your request has been received. A representative will be in contact with you shortly.'
        }
    });
});



module.exports = router;
