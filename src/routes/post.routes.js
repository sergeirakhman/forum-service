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

router.post('forum/post/:user', addPost);
router.delete('forum/post/:postId', deletePost);
router.patch('forum/post/:postId/like', addLike);
router.get('forum/post/:postId', findPostById);
router.patch('forum/post/:postId/comment/:commenter', addComment);
router.get('forum/posts/author/:user', findPostsByAuthor);
router.get('forum/posts/period', findPostsByPeriod);
router.get('forum/posts/tags', findPostsByTags);
router.patch('forum/post/:postId', updatePost)

export default router;