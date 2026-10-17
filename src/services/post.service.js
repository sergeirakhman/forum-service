import * as postRep from "../repository/post.repository.js";
import * as Post from "../repository/post.repository.js";

export const addPost = async (author, data) => {
    const tags = [... new Set(data.tags)];
    return await postRep.addPost({author, ...data, tags});
}

export const deletePost = async (postId) => {

}

export const addLike = (postId) => {
    //TODO
}

export const findPostById = async (postId) => {
    const post = await Post.findById(postId);
    if (!post) throw  new Error(`Post with ${postId} not found`);
    return post;
}

export const addComment = (id, comment, commenter) => {}

export  const findPostsByAuthor = (author) => {
    //TODO
}

export  const findPostsByPeriod = (dateFrom, dateTo) => {
    //TODO
}

export const findPostsByTags = (tags) => {
    //TODO
}

export  const updatePost = (id, data) => {
    //TODO
}