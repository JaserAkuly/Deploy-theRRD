var express = require('express');
var router = express.Router();
var email = require('../app/email');

router.get('/renters', function(req, res, next) {
    res.render('insurance/renters', {
        title: 'Renters Insurance',
        hero: {
            title: 'Renters Insurance'
        },
        modals: [
            {
                id: 'rentersInsuranceQuote',
                title: 'Get A Quote Today!',
                url: '',
                form: 'form_renters_insurance',
                bootstrap: true
            }
        ]
    });
});

router.post('/renters', function(req, res, next) {
    var fields = [
        ['rentersInsuranceName', 'Name: '],
        ['rentersInsuranceEmail', 'Email: '],
        ['rentersInsuranceNumber', 'Number: '],
        ['rentersInsuranceSize', 'Company Size']
    ];
    email(req, res, 'Renters Insurance Quote', fields);
});

router.get('/property', function(req, res, next) {
    res.render('insurance/property', {
        title: 'Property Insurance Coverage',
        hero: {
            title: 'Property Insurance Coverage'
        },
        modals: [
            {
                id: 'propertyInsuranceQuote',
                title: 'Get A Quote Today!',
                url: '',
                form: 'form_property_and_liability_insurance',
                bootstrap: true
            }
        ]
    });
});

router.post('/property', function(req, res, next) {
    var fields = [
        'propertyInsuranceName',
        'propertyInsuranceEmail',
        'propertyInsuranceNumber',
        'propertyType',
        'propertyInsuranceAddress'
    ];
    email(req, res, 'Property Insurance Quote', fields);
});

router.get('/liability', function(req, res, next) {
    res.render('insurance/liability', {
        title: 'Liability Insurance Coverage',
        hero: {
            title: 'Liability Insurance Coverage'
        },
        modals: [
            {
                id: 'liabilityInsuranceQuote',
                title: 'Get A Quote Today!',
                url: '',
                form: 'form_property_and_liability_insurance',
                bootstrap: true
            }
        ]
    });
});

router.post('/liability', function(req, res, next) {
    var fields = [
        'propertyInsuranceName',
        'propertyInsuranceEmail',
        'propertyInsuranceNumber',
        'propertyType',
        'propertyInsuranceAddress'
    ];
    email(req, res, 'Liability Insurance Quote', fields);
});

router.get('/property-insurance-referral-fee', function(req, res, next) {
    res.render('insurance/property-insurance-referral-fee', {
        title: 'Property Insurance Referral Fee',
        hero: {
            title: 'Referral Fees For Property Insurance'
        },
        modals: [
            {
                id: 'propertyInsuranceReferral',
                title: 'Send A Referral',
                url: '',
                form: 'form_property_insurance_referral',
                bootstrap: true
            }
        ]
    });
});

router.post('/property-insurance-referral-fee', function(req, res, next) {
    var fields = [
        'referralFirstName',
        'referralLastName',
        'referralEmail',
        'referralNumber',
        'referralUnit'
    ];
    email(req, res, 'Property Insurance Referral', fields);
});

module.exports = router;
