const User = require('../models/user');
const Post = require('../models/post');

module.exports = {
    index,
    new: newMusic,
    create,
    show,
    edit,
    update,
}

function update(req, res) {
    Post.findById(req.params.id, function(err, post) {
        post.link = req.body.link;
        post.instrument = req.body.instrument;
        post.comment = req.body.comment;
        post.save(function(err) {
            if (err) return res.redirect('/musics/new');
            res.redirect('/musics');
        });
    });
}

function edit(req, res) {
    Post.findById(req.params.id, function(err, post) {
        res.render('musics/edit', {
            title: 'Edit Page',
            post
        });
    });
}

function show(req, res) {
    Post.findById(req.params.id, function(err, post) {
        res.render('musics/show', {title: 'Show Page', post});
    });
}

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    let post = new Post(req.body);
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
