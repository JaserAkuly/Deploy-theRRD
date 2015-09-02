var express = require('express');
var router = express.Router();

router.get('/ir-app', function(req, res, next) {
    res.render('appregister/ir-app', {
        title: 'IR App',
    });


});

module.exports = router;
