import * as postService from '../services/post.service.js'
import {err_404} from "../errors/err.js";

export const addPost = async (req, res) => {
    console.log(req.params.author)
    const post = await postService.addPost(req.params.author, req.body);
    return res.status(201).json(post);
}

export const deletePost = async (req, res) => {
    const post = await postService.deletePost(req.params.id);
    post ? res.json(post) : res.status(404).send(err_404(req.params.id, req.params));
}

export const addLike = async (req, res) => {
    const success = await postService.addLike(req.params.postId);
    success ? res.status(204).send() : res.status(404).send(err_404(req.params.id, req.params));
}

export const findPostById = async (req, res) => {
    const post = await postService.findPostById(req.params.postId);
    post ? res.json(post) : res.status(404).send(err_404(req.params.postId, req.params));
}

export const addComment = async (req, res) => {
    const success = await postService.addComment(req.params.postId, req.body.message, req.body.commenter);
    success ? res.status(204).send() : res.status(404).send(err_404(req.params.id, req.params));
}

export  const findPostsByAuthor = async (req, res) => {
    const posts = await postService.findPostsByAuthor(req.params.author);
    res.json(posts);
}

export  const findPostsByPeriod = async (req, res) => {
    const posts = await postService.findPostsByPeriod(req.params.dateFrom, req.params.dateTo);
    res.json(posts);
}

export const findPostsByTags = async (req, res) => {
    const posts = await postService.findPostsByTags(req.params.tags);
    res.json(posts);
}

export const updatePost = async (req, res) => {
    const post = await postService.updatePost(req.params.id);
    post ? res.json(post) : res.status(404).send(err_404(req.params.id, req.params));
}