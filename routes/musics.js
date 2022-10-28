var express = require('express');
var router = express.Router()
var musicsCtrl = require('../controllers/musics');

router.get('/', musicsCtrl.index);

module.exports = router;
