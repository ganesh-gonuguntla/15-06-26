const users = require('../modules/user.modules');

function getAllUsers(){
    return users;
}

function getUserById(userId){
    const user = users.find(user=>Number(user.userId) === Number(userId));

    if(!user)
    {
        console.log(`User with id ${userId} not found`);
    }

    return user;
}

function createUser(userData)
{
    const newUserId = users.length+1;
    const newUser = {
        userId : newUserId,
        ...userData
    }
    users.push(newUser);
    return newUser;
}

function updateUserById(userId, userData)
{
    const userIndex = users.findIndex(user=>Number(user.userId) === Number(userId));

    if(userIndex === -1)
    {
        console.log(`User with id ${userId} not found`);
        return null;
    }
    users[userIndex] = { ...users[userIndex], ...userData };
    return users[userIndex];
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById
}