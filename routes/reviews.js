var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.post('/musics/:id/reviews', reviewsCtrl.create);

router.get('/musics/:id/edit', reviewsCtrl.edit);

module.exports = router;
