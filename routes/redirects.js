var express = require('express');
var router = express.Router();

router.get('/index.html', function(req, res) {
    res.redirect('/');
});

router.get('/jobs.html', function(req, res) {
    res.redirect('/jobs/search');
});

router.get('/screening.html', function(req, res) {
    res.render('screening/redirect');
});

router.get('/vendor.html', function(req, res) {
    res.render('vendor/redirect');
});

router.get('/insurance.html', function(req, res) {
    res.render('insurance/redirect');
});

module.exports = router;
