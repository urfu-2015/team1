var express = require('express');
var router = express.Router();
var search = require('../controllers/search');

/* GET search results */
router.get('/', function (req, res) {
    res.redirect('/');
});

/* POST search results */
router.post('/', search.post);

module.exports = router;
