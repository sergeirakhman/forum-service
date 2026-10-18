import * as postRep from "../repository/post.repository.js";
import * as Post from "../repository/post.repository.js";

export const addPost = async (author, data) => {
    const tags = [... new Set(data.tags)];
    return await postRep.addPost({author, ...data, tags});
}

export const deletePost = async (postId) => {
    const post = await Post.deletePost(postId);
    if (!post) throw new Error(`Post with ${postId} not found`);
    return post;
}

export const addLike = async (postId) => {
    const post = await Post.addLike(postId);
    if (!post) throw new Error(`Post with ${postId} not found`);
    return post;
}

export const findPostById = async (postId) => {
    const post = await Post.findById(postId);
    if (!post) throw new Error(`Post with ${postId} not found`);
    return post;
}

export const addComment = async (postId, comment, commenter) => {
    const post = await Post.addComment(postId, comment, commenter);
    if (!post) throw new Error(`Post with ${postId} not found`);
    return post;
}

export  const findPostsByAuthor = async (author) => await Post.findByAuthor(author);

export  const findPostsByPeriod = async (dateFrom, dateTo) => await Post.findByPeriod(dateFrom, dateTo);

export const findPostsByTags = async (tags) => {
    tags = Array.isArray(tags) ? tags : [tags];
    return await Post.findByTags(tags);
}

export const updatePost = async(postId, data) => {
    const post = await Post.updatePost(postId, data);
    if (!post) throw new Error(`Post with ${postId} not found`);
    return post;
}