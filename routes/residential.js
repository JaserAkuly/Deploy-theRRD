var express = require('express');
var router = express.Router();

router.get('/sale', function(req, res, next) {
    res.render('residential/sale', {
        title: 'For Sale - Residential',
        hero: {
            title: 'For Sale - Residential',
            small_title: 'default'
        }
    });
});

router.get('/rent', function(req, res, next) {
    res.render('residential/rent', {
        title: 'For Rent - Residential',
        hero: {
            title: 'For Rent - Residential',
            small_title: 'default'
        }
    });
});

module.exports = router;
