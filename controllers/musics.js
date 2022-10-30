const User = require('../models/user');
const Post = require('../models/post');

module.exports = {
    index,
    new: newMusic,
    create,
}

function create(req, res) {
    let post = new Post(req.body)
    post.save(function(err) {
        if (err) return res.redirect('/musics/new');
        res.redirect('/musics');
    });
}

function newMusic(req, res) {
        res.render('musics/new', { title: 'Create a post!'});
}

function index(req, res) {
    Post.find({}, function(err, posts) {
        res.render('musics/index', { 
            title: 'Music', 
            posts 
        });
    });
}
