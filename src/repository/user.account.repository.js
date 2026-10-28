import UserAccount from "../models/user.account.model.js";

export const addUser = async (user) => UserAccount.create(user);

export const deleteUser = async (login) => UserAccount.findByIdAndDelete(login, {returnDocument: 'after'}).exec();

export const updateUser = async (login, updateData) => UserAccount.findByIdAndUpdate(login, updateData, {returnDocument: 'after'}).exec();

export const getUser = async (login) => UserAccount.findById(login).exec();

export const addRole = async (login, role) => UserAccount.findByIdAndUpdate(login,{$addToSet: {roles: role}}, {returnDocument: 'after'}).select({roles: 1, login: 1}).exec();

export const removeRole = async (login, role) => UserAccount.findByIdAndUpdate(login,{$pull: {roles: role}}, {returnDocument: 'after'}).select('-firstName -lastName').exec();
