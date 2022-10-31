const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
});

const postSchema = new Schema({
    link: String,
    instrument: String,
    googleId: {
        type: String,
    },
    comment: String,
    review: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);