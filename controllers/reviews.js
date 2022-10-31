const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
    create,
}

function create(req, res) {
    console.log('here');
    Post.findById(req.params.id, function(err, post) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvater = req.user.avatar;
        post.review.push(req.body);
        post.save(function(err) {
            res.redirect(`/musics/${post._id}`);
        });
    });

}