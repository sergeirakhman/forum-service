import * as userAccountService from '../services/user.account.service.js'

export const registerUser = async (req, res) => {
    const userAccount = await userAccountService.registerUser(req.body);
    userAccount ? res.status(201).json(userAccount) : res.status(409).send();
}

export const loginUser = async (req, res) => {
    // TODO
}

export const deleteUser = async (req, res) => {
    //TODO
}

export const updateUser = async (req, res) => {
    //TODO
}

export const addRole = async (req, res) => {
    //TODO
}

export  const deleteRole = async (req, res) => {
    //TODO
}

export const changePassword = async (req, res) => {
    //TODO
}

export const getUser = async (req, res) => {
    //TODO
}