var express = require('express');
var router = express.Router();
var commentsCtrl = require('../controllers/comments');
var ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/musics/:id/comments', ensureLoggedIn, commentsCtrl.create);

router.get('/comments/:commentId/edit', ensureLoggedIn, commentsCtrl.edit);

router.put('/comments/:id', ensureLoggedIn, commentsCtrl.update);

router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);

module.exports = router;
