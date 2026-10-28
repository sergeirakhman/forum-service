import {Router} from "express";
import {
    registerUser,
    loginUser,
    deleteUser,
    updateUser,
    addRole,
    deleteRole,
    changePassword,
    getUser
} from "../controllers/user.account.controller.js";
import validate from "../middlewares/validator.middleware.js";

const router = Router();

router.post('/register', validate('registerUser') ,registerUser);
router.post('/login', loginUser);
router.delete('/user/:login', deleteUser);
router.patch('/user/:login', updateUser);
router.patch('/user/:login/role/:role', validate('changeRoles'), addRole);
router.delete('/user/:login/role/:role', validate('changeRoles', 'params'),deleteRole);
router.patch('/password', changePassword);
router.get('/user/:login/role/:role', getUser)

export default router;