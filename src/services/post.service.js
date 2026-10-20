import * as postRep from "../repository/post.repository.js";

export const addPost = async (author, data) => {
    const tags = [... new Set(data.tags)];
    return await postRep.addPost({author, ...data, tags});
}

export const deletePost = async (postId) => {
    const post = await postRep.deletePost(postId);
    if (!post) throw new Error(`Post with ${postId} not found`);
    return post;
}

export const addLike = async (postId) => {
    const post = await postRep.addLike(postId);
    if (!post) throw new Error(`Post with ${postId} not found`);
    return post;
}

export const findPostById = async (postId) => {
    const post = await postRep.findById(postId);
    if (!post) throw new Error(`Post with ${postId} not found`);
    return post;
}

export const addComment = async (postId, comment, commenter) => {
    const post = await postRep.addComment(postId, comment, commenter);
    if (!post) throw new Error(`Post with ${postId} not found`);
    return post;
}

export  const findPostsByAuthor = async (author) => await postRep.findByAuthor(author);

export  const findPostsByPeriod = async (dateFrom, dateTo) => await postRep.findByPeriod(dateFrom, dateTo);

export const findPostsByTags = async (tagsString) => {
    const tags = tagsString.split(',').map(tag => tag.trim());
    return await postRep.findByTags(tags);
}

export const updatePost = async(postId, data) => {
    const post = await postRep.updatePost(postId, data);
    if (!post) throw new Error(`Post with ${postId} not found`);
    return post;
}