const userServices = require('../services/user.services');

function createUser(req, res){
    const userData = req.body;
    const newUser = userServices.createUser(userData);
    res.status(201).json(newUser);
}

function getAllUsers(req, res){
    const users = userServices.getAllUsers();
    res.status(200).json(users);
}

function getUserById(req, res){
    const userId = req.params.userId;
    const user = userServices.getUserById(userId);
    if(user){
        res.status(200).json(user);
    }
    else {
        res.status(404).json({ message: `User with id ${userId} not found` });
    }

}

function updateUserById(req, res){
    const userId = req.params.userId;
    const userData = req.body;
    const updatedUser = userServices.updateUserById(userId, userData);
    if(updatedUser){
        res.status(200).json(updatedUser);
    }
    else {
        res.status(404).json({ message: `User with id ${userId} not found` });
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById
}