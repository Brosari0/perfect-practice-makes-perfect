var express = require('express');
var router = express.Router()
var musicsCtrl = require('../controllers/musics');

router.get('/', musicsCtrl.index);

router.get('/new', musicsCtrl.new);

router.post('/', musicsCtrl.create);

router.get('/:id', musicsCtrl.show);

router.get('/:id/edit', musicsCtrl.edit);

router.put('/:id', musicsCtrl.update);



module.exports = router;
