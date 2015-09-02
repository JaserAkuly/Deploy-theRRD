var express = require('express');
var router = express.Router();
var email = require('../app/email');

router.get('/guide', function(req, res, next) {
    res.render('vendor/guide', {
        title: 'Vendor Guide',
        hero: {
            title: 'Vendor Guide'
        }
    });
});

router.get('/mortgage-lending', function(req, res, next) {
    res.render('vendor/mortgage-lending', {
        title: 'Mortgage Lending',
        hero: {
            title: 'Mortgage Lending'
        },
        modals: [
            {
                id: 'mortgageLendingModal',
                title: 'Sign Up Below To Request More Information',
                url: '',
                form: 'form_mortgage_lending',
            }
        ]
    });
});

router.post('/mortgage-lending', function(req, res, next) {
    var fields = [
        ['mortgageLendingFirstName', 'First Name:'],
        ['mortgageLendingLastName', 'Last Name:'],
        ['mortgageLendingEmail', 'Email:'],
        ['mortgageLendingPhoneNumber', 'Phone Number:'],
        ['mortgageLendingLoanType', 'Loan Type:'],
        ['zip', 'Zip:'],
        ['city', 'City:'],
        ['state', 'State:'],
        ['mortgageLendingLoanAmount', 'Loan Amount:'],
        ['mortgageLendingCurrentLoanAmount', 'Current Loan Amount:'],
        ['mortgageLendingRole', 'User Role:'],
        ['mortgageLendingPropertyType', 'Property Type:'],
        ['mortgageLendingPropertyValue', 'Property Value:'],
        ['mortgageLendingNetIncome', 'Net Income:'],
        ['mortgageLendingAmortization','Amortization:']
    ];
    email(req, res, 'Mortgage Lending Request', fields);
});

router.get('/payment-acceptance', function(req, res, next) {
    res.render('vendor/payment-acceptance', {
        title: 'Payment Acceptance',
        hero: {
            title: 'Payment Acceptance'
        },
        modals: [
            {
                id: 'pasModal',
                title: 'Let Us Help You Create Your Package',
                url: '',
                form: 'form_payment_acceptance'
            }
        ]
    });
});

router.post('/payment-acceptance', function(req, res, next) {
    var fields = [
        ['pasFirstName', 'First Name: '],
        ['pasLastName', 'Last Name: '],
        ['pasEmail', 'Email: '],
        ['pasNumber', 'Phone Number: '],
        ['pasService', 'Service: ']
    ];
    email(req, res, 'Payment Acceptance Service Quote Request', fields);
});

router.get('/property-management', function(req, res, next) {
    res.render('vendor/property-management', {
        title: 'Property Management',
        hero: {
            title: 'Property Management'
        },
        modals: [
            {
                id: 'findPropertyManagementModal',
                title: 'Get More Info Today!',
                url: '',
                form: 'form_property_management',
                bootstrap: true
            }
        ]
    });
});

router.post('/property-management', function(req, res, next) {
    var fields = [
        ['findpropertymanagementName', 'Name: '],
        ['findPropertyManagementEmail', 'Email: '],
        ['findPropertyManagementNumber', 'Phone Number: '],
        ['findPropertyManagementAddress', 'Address: '],
        ['findPropertyManagementNeeds', 'Needs: '],
        ['propertyType', 'Property Type: ']
    ];
    email(req, res, 'Find Property Management', fields);
});

router.get('/purchase-energy', function(req, res, next) {
    res.render('vendor/purchase-energy', {
        title: 'Energy Providers',
        hero: {
            title: 'theRRD Energy Providers',
            small_title: 'default',
            tour_button: true
        }
    });
});

router.get('/referral-signup', function(req, res, next) {
    res.render('vendor/referral-signup', {
        title: 'Sign Up as a Vendor',
        hero: {
            title: 'theRRD',
            small_title: 'default'
        }
    });
});

router.get('/property-manager-referral-signup', function(req, res, next) {
    res.render('vendor/property-manager-referral-signup', {
        title: 'Apply For Client Referrals',
        hero: {
            title: 'theRRD',
            small_title: 'default'
        }
    });
});

module.exports = router;
