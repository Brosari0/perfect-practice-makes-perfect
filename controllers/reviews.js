const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
    create,
    edit,
    update,
    delete: deleteReview,
}

function deleteReview(req, res) {
    Post.findOne({'reviews._id': req.params.id}, function(err, post) {
        if (!post || err) return res.redirect( `/musics/${post._id}`);
        post.review.remove(req.params.id);
        post.save(function(err) {
            res.redirect(`/musics/${post._id}`)
        });
    });
}

function update(req, res) {
    Post.findOne({'reviews._id': req.params.id}, function(err, post) {
        const review = post.review.id(req.params.id);
        // if (!review.userId.equals(req.user._id)) return res.redirect(`/musics/${post._id}`);
        review.content = req.body.content;
        post.save(function(err) {
            res.redirect(`/musics/${post._id}`);
        });
    });
}

function edit(req, res) {
    Post.findOne({'reviews._id': req.params.reviewId}, function(err, post) {
        const review = post.review.id(req.params.reviewId);
        res.render('reviews/edit', {
            title: 'Edit Page',
            review
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