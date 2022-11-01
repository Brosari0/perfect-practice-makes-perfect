var express = require('express');
var router = express.Router()
var musicsCtrl = require('../controllers/musics');
var ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', musicsCtrl.index);

router.get('/new', ensureLoggedIn, musicsCtrl.new);

router.post('/', ensureLoggedIn, musicsCtrl.create);

router.get('/:id', musicsCtrl.show);

router.get('/:id/edit', ensureLoggedIn, musicsCtrl.edit);

router.put('/:id', ensureLoggedIn, musicsCtrl.update);



module.exports = router;
