import * as userAccountRepository from "../repository/user.account.repository.js";

export const registerUser = async (user) => {
    try {
        return await userAccountRepository.addUser(user);
    } catch (e) {
        throw new Error('User already exists');
    }
}

export const loginUser = async (login) => {

}

export const deleteUser = async (login) => {
    const user = await userAccountRepository.deleteUser(login);

    if (!user)
        throw new Error(`User with login ${login} not found`);

    return user;

}

export  const updateUser = async (login, data) => {
    const user = await userAccountRepository.updateUser(login, data);
    console.log(user)
    if (!user)
        throw new Error(`User with login ${login} not found`);

    return user;
}

export const changeRoles = async (login, role, isAddRole) => {
    role = role.toUpperCase();
    const user = isAddRole ? await userAccountRepository.addRole(login, role) : await userAccountRepository.removeRole(login, role);
    if (!user) {
        throw new Error(`User with login '${login}' not found`);
    }
    return user;
}

export const addRole = async (user, role) => {
    //TODO
}

export const deleteRole = async (user, role) => {
    //TODO
}

export  const changePassword = async () => {
    //TODO
}

export  const getUser = async (login) => {
    const user = await userAccountRepository.getUser(login);
    if (!user) {
        throw new Error(`User with login '${login}' not found`);
    }
    return user;
}