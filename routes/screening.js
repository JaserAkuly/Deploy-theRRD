var express = require('express');
var router = express.Router();
var email = require('../app/email');

router.get('/tenant', function(req, res, next) {
    console.log(req.path);
    res.render('screening/tenant', {
        title: 'Tenant Screening',
        hero: {
            title: 'Tenant Screening At theRRD'
        },
        modals: [
            {
                id: 'requestScreeningInfo',
                title: 'Sign Up Below To Request More Information',
                url: '/screening/tenant/request-info',
                form: 'form_request_screening'
            },
            {
                id: 'TSCreatePackage',
                title: 'Let Us Help You Create Your Package',
                url: '/screening/tenant/create-package',
                form: 'form_ts_create_package'
            }
        ]
    });
});

router.post('/tenant/request-info', function(req, res, next) {
    var fields = [
        ['tenantScreeningCompanyName', 'Company Name'],
        ['tenantScreeningBusinessType', 'Business Type'],
        ['tenantScreeningYears', 'Years In Business'],
        ['tenantScreeningNumberOfUnits', '] Number Of Units'],
        ['tenantScreeningFirstName', 'First Name'],
        ['tenantScreeningLastName', 'Last Name'],
        ['tenantScreeningEmail', 'Email'],
        ['tenantScreeningNumber', 'Phone Number']
    ];
    email(req, res, 'Tenant Screening Request', fields);
});

router.post('/tenant/create-package', function(req, res, next) {
    var fields = [
        ['tscpCompanyName', 'Company name'],
        ['tscpBusinessType', 'Business type'],
        ['tscpYears', 'Years in business'],
        ['tscpNumberOfUnits', 'Number of units'],
        ['tscpFirstName', 'First name'],
        ['tscpLastName', 'Last name'],
        ['tscpEmail', 'Email'],
        ['tscpNumber', 'Phone number'],
        ['vals', 'Services']
    ];
    email(req, res, 'Custom Package Request', fields);
});

router.get('/employment', function(req, res, next) {
    res.render('screening/employment', {
        title: 'Employment Screening',
        hero: {
            title: 'Employment Screening At theRRD'
        },
        modals: [
            {
                id: 'requestEmployeeScreeningInfo',
                title: 'Let Us Help You Create Your Package',
                url: '',
                form: 'form_request_employee_screening'
            }
        ]
    });
});

router.post('/employment', function(req, res, next) {
    var fields = [
        ['esCompanyName','Company Name'],
        ['esEmail', 'Email'],
        ['esNumber', 'Phone Number']
    ];
    email(req, res, 'Employee Screening Info Request', fields);
});

router.get('/incident', function(req, res, next) {
    res.render('screening/incident', {
        title: 'Incident Reporting',
        hero: {
            title: 'Incident Reporting At theRRD'
        },
        modals: [
            {
                id: 'requestIncidentInfo',
                title: 'Let Us Help You Create Your Package',
                url: '',
                form: 'form_request_incident_info'
            }
        ]
    });
});

router.post('/incident', function(req, res, next) {
    var fields = [
        ['irFirstName','First Name: '],
        ['irLastName', 'Last Name: '],
        ['irEmail', 'Email: '],
        ['irNumber', 'Number: '],
        ['irPropertyType', 'Property Type: '],
        ['irUnits', 'Number of Units: '],
        ['irAddress1', 'Address: '],
        ['irAddress2', 'First Name: '],
        ['irZip', 'Zip: '],
        ['irCity', 'City: '],
        ['irState', 'State: ']
    ];
    email(req, res, 'Incident Reporting Request', fields);
});

module.exports = router;
