var express = require('express');
var router = express.Router();

router.get('/terms-of-service', function(req, res, next) {
    res.render('legal/terms-of-service', {
        title: 'Terms Of Service',
        hero: {
            title: 'theRRD',
            small_title: 'default',
            tour_button: true
        }
    });
});

router.get('/privacy-policy', function(req, res, next) {
    res.render('legal/privacy-policy', {
        title: 'Privacy Policy',
        hero: {
            title: 'theRRD',
            small_title: 'default',
            tour_button: true
        }
    });
});

router.get('/dispute-process', function(req, res, next) {
    res.render('legal/dispute-process', {
        title: 'Dispute Process',
        hero: {
            title: 'theRRD Consumer Affairs'
        }
    });
});

module.exports = router;
