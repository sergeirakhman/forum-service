import * as userAccountService from '../services/user.account.service.js'

export const registerUser = async (req, res, next) => {
    try {
        const user = await userAccountService.registerUser(req.body);
        return res.status(201).json(user);
    } catch (e) {
        return next(e);
    }
}

export const loginUser = async (req, res, next) => {

}

export const getUser = async (req, res, next) => {
    try {
        const user = await userAccountService.getUser(req.params.login);
        return res.json(user);
    } catch (e) {
        return next(e);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const user = await userAccountService.deleteUser(req.params.login);
        return res.json(user);
    } catch (e) {
        return next(e);
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const userAccount = await userAccountService.updateUser(req.params.login, req.body);
        return res.json(userAccount);
    } catch (e) {
        return next(e);
    }
}

export const addRole = async (req, res) => {
    try {
        const userRoles = await userAccountService.changeRoles(req.params.login, req.params.role, true);
        return res.json(userRoles);
    } catch (e) {
        return next(e);
    }
}

export  const deleteRole = async (req, res) => {
    try {
        const userRoles = await userAccountService.changeRoles(req.params.login, req.params.role, false);
        return res.json(userRoles);
    } catch (e) {
        return next(e);
    }
}

export const changePassword = async (req, res) => {
    //TODO
}
