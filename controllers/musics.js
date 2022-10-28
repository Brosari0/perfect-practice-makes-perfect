

module.exports = {
    index,
}

function index(req, res) {
    res.render('musics/index', { title: 'Music' });
}