const mongoose = require('mongoose');

const { Schema } = mongoose;

const blogSchema = new Schema({
  title: { type: String },
  body: { type: String },
  image: { type: String },
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now, immutable: true },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

module.exports = mongoose.model('Blog', blogSchema);
