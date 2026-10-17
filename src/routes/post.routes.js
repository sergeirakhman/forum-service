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

const router = Router();

router.post('/post/:user', addPost);
router.delete('/post/:postId', deletePost);
router.patch('/post/:postId/like', addLike);
router.get('/post/:postId', findPostById);
router.patch('/post/:postId/comment/:commenter', addComment);
router.get('/posts/author/:user', findPostsByAuthor);
router.get('/posts/period', findPostsByPeriod);
router.get('/posts/tags', findPostsByTags);
router.patch('/post/:postId', updatePost)

export default router;