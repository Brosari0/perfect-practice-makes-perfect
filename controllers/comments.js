const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
    create,
    edit,
    update,
    delete: deleteComment,
}

function deleteComment(req, res) {
    Post.findOne({'comments._id': req.params.id}, function(err, post) {
        if (!post || err) return res.redirect( `/musics/${post._id}`);
        post.comments.remove(req.params.id);
        post.save(function(err) {
            res.redirect(`/musics/${post._id}`)
        });
    });
}

function update(req, res) {
    Post.findOne({'comments._id': req.params.id}, function(err, post) {
        const comment = post.comments.id(req.params.id);
        // if (!comment.userId.equals(req.user._id)) return res.redirect(`/musics/${post._id}`);
        comment.content = req.body.content;
        post.save(function(err) {
            res.redirect(`/musics/${post._id}`);
        });
    });
}

function edit(req, res) {
    Post.findOne({'comments._id': req.params.commentId}, function(err, post) {
        const comment = post.comments.id(req.params.commentId);
        res.render('comments/edit', {
            title: 'Edit Page',
            comment
        });
    });
}

function create(req, res) {
    Post.findById(req.params.id, function(err, post) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        post.comments.push(req.body);
        post.save(function(err) {
            res.redirect(`/musics/${post._id}`);
        });
    });
}