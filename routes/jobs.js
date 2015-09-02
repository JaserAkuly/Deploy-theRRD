var express = require('express');
var router = express.Router();

router.get('/search', function(req, res, next) {
    res.render('jobs/search', {
        title: 'Jobs Search',
        hero: {
            title: 'Jobs',
            small_title: 'default'
        }
    });
});

router.get('/post', function(req, res, next) {
    res.render('jobs/post', {
        title: 'Post Jobs',
        hero: {
            title: 'Post Jobs At theRRD',
            small_title: 'default'
        }
    });
});

module.exports = router;
