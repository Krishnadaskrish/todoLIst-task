const userRoute = require('express').Router()
const trycatch = require('../Middileware/Trycatch')
const userController = require('../Controllers/UseController')
const upload = require('../Middileware/MulterConfig')
const varifyToken = require ('../Middileware/UserAuth')


userRoute.post('/registration' ,trycatch(userController.register))
userRoute.post('login', trycatch(userController.userLongin))
userRoute.post('/profile',varifyToken,upload,(userController.ProfileSetting))
userRoute.put('/update',varifyToken,trycatch(userController.editProfile))
userRoute.post('/addtodo',varifyToken,trycatch(userController.Addtodo))
userRoute.get('/gettodo',varifyToken,trycatch(userController.getTodo))
userRoute.put('/edittodo',varifyToken,trycatch(userController.editTodo))
userRoute.delete('/edittodo',varifyToken,trycatch(userController.deleteTodo))





module.exports = userRoute