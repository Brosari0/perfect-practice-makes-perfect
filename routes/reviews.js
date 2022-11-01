var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');
var ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/musics/:id/reviews', ensureLoggedIn, reviewsCtrl.create);

router.get('/reviews/:reviewId/edit', ensureLoggedIn, reviewsCtrl.edit);

router.put('/reviews/:id', ensureLoggedIn, reviewsCtrl.update);

router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);

module.exports = router;
