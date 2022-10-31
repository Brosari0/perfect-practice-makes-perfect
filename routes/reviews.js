var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.post('/musics/:id/reviews', reviewsCtrl.create);

module.exports = router;
