import * as postService from '../services/post.service.js'
import {err_404} from "../errors/err.js";

export const addPost = async (req, res) => {
    console.log(req.params.author)
    const post = await postService.addPost(req.params.author, req.body);
    return res.status(201).json(post);
}

export const deletePost = async (req, res, next) => {
    try {
        const post = await postService.deletePost(req.params.postId);
        res.json(post)
    }
    catch (e) { return next(e);}
}

export const addLike = async (req, res, next) => {
    try {
        await postService.addLike(req.params.postId);
        return res.sendStatus(204);
    }
    catch (e) {
        return next(e);
    }
}

export const findPostById = async (req, res, next) => {
    try {
        const post = await postService.findPostById(req.params.postId);
        res.json(post)
    } catch (e) {
        return next(e);
    }
}

export const addComment = async (req, res, next) => {
    try {
        const post = await postService.addComment(req.params.postId, req.body.message, req.params.commenter);
        return res.json(post);
    }
    catch (e) { return next(e);}
}

export  const findPostsByAuthor = async (req, res) => {
    const posts = await postService.findPostsByAuthor(req.params.author);
    res.json(posts);
}

export  const findPostsByPeriod = async (req, res) => {
    const posts = await postService.findPostsByPeriod(req.query.dateFrom, req.query.dateTo);
    res.json(posts);
}

export const findPostsByTags = async (req, res) => {
    const tags = [].concat(req.query.values || []);
    const posts = await postService.findPostsByTags(tags);
    res.json(posts);
}

export const updatePost = async (req, res, next) => {
    try {
        const post = await postService.updatePost(req.params.postId, req.body);
        res.json(post)
    }
    catch (e) { return next(e);}
}