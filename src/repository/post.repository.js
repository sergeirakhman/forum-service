import Post from '../models/post.model.js';

export const addPost = post => Post.create(post);

export const findById = id => Post.findById(id).exec();