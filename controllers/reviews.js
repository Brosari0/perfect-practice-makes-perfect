const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
    create,
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

function create(req, res) {
    Post.findById(req.params.id, function(err, post) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        post.review.push(req.body);
        post.save(function(err) {
            res.redirect(`/musics/${post._id}`);
        });
    });
}