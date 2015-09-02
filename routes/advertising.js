var express = require('express');
var router = express.Router();
var email = require('../app/email');

router.get('/', function(req, res, next) {
    res.render('advertising/index', {
        title: 'Advertising with theRRD',
        hero: {
            title: 'Advertising with theRRD',
            small_title: 'default',
            tour_button: true
        }
    });
});

router.get('/online', function(req, res, next) {
    res.render('advertising/online', {
        title: 'Online Advertising with theRRD',
        hero: {
            title: 'theRRD',
            small_title: 'default',
            tour_button: true
        },
        modals: [
            {
                id: 'onlineAdvertisingModal',
                title: 'Apply To Advertise Online Today',
                url: '',
                form: 'form_online_advertising',
                bootstrap: true
            }
        ]
    });
});

router.post('/online', function(req, res, next) {
    var fields = [
        ['onlineCompanyName', 'Company Name: '],
        ['onlineCompanyAddress', 'Address: '],
        ['onlineCompanyWebsite', 'Website: '],
        ['onlineEmployeeName', 'Names: '],
        ['onlineEmployeeNumber', 'Phone Number: '],
        ['onlineEmployeeEmail', 'Email: '],
        ['onlineMessage', 'Message: ']
    ];
    email(req, res, 'Online Advertising Request', fields);
});

router.get('/coupon', function(req, res, next) {
    res.render('advertising/coupon', {
        title: 'Coupon Marketing with theRRD',
        hero: {
            title: 'theRRD',
            small_title: 'default',
            tour_button: true
        },
        modals: [
            {
                id: 'couponModal',
                title: 'Apply for Coupon Advertising Today',
                url: '',
                form: 'form_coupon_advertising',
            }
        ]
    });
});


router.post('/coupon', function(req, res, next) {
    var fields = [
        ['couponCompanyName','Company Name: '],
        ['couponCompanyAddress1', 'Address: '],
        ['couponCompanyAddress2', 'Address: '],
        ['couponCompanyZip', 'Zip: '],
        ['couponCompanyCity', 'City: '],
        ['couponCompanyState', 'State: '],
        ['couponCompanyWebsite', 'Website: '],
        ['couponEmployeeName', 'Employee Name:'],
        ['couponEmployeePhoneNumber', 'Phone Number: '],
        ['couponEmployeeEmail', 'Email: '],
        ['couponMessage', 'Message: ']
    ];
    email(req, res, 'Coupon Advertising Request', fields);
});

module.exports = router;
