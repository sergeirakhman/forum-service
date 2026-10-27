import Post from '../models/post.model.js';

export const addPost = async post => Post.create(post);

export const deletePost = async postId => Post.findByIdAndDelete(postId).exec();

export const addLike = async (postId) => {
    const post = await findById(postId);
    post.likes += 1;
    return updatePost(postId, post);
}

export const addComment = async (postId, comment, commenter) => {
    const post = await findById(postId);
    post.comments.push({author: commenter,
        message: comment,
    })
    return await updatePost(postId, post);
}

export const findById = async postId => Post.findById(postId).exec();

export const findByAuthor = async author => Post.find({author: new RegExp(`^${author}$`, 'i')});

export const findByPeriod = async (dateFrom, dateTo) => Post.find({dateCreated: {$gte: new Date(dateFrom), $lte: new Date(dateTo)}})

export const findByTags = async values => {
    const regexTags = values.map(tag => new RegExp(`^${tag}$`, 'i'));
    return Post.find({tags: {$in: regexTags}}).exec();
};

export const updatePost = (postId, updatedData) => {
    const tags = updatedData.tags ?? [];
    delete updatedData.tags;
    const data = {...updatedData, $addToSet: {tags}};
    return Post.findByIdAndUpdat(id, data, {returnDocument: 'after'}).exec();
}