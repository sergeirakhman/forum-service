import {Router} from "express";
import {
    addPost,
    deletePost,
    addLike,
    findPostById,
    addComment,
    findPostsByAuthor,
    findPostsByPeriod,
    findPostsByTags,
    updatePost
} from "../controllers/post.controller.js";
import validate from "../middlewares/validator.middleware.js";

const router = Router();

router.post('/post/:author', validate('addPost'), addPost);
router.delete('/post/:postId', deletePost);
router.patch('/post/:postId/like', addLike);
router.get('/post/:postId', findPostById);
router.patch('/post/:postId/comment/:commenter', validate('addComment'), addComment);
router.get('/posts/author/:author', findPostsByAuthor);
router.get('/posts/period', validate('dateFormatPeriod', 'query'), findPostsByPeriod);
router.get('/posts/tags', findPostsByTags);
router.patch('/post/:postId', validate('updatePost'), updatePost)

export default router;