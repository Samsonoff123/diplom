const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/sendDescriptions', userController.sendDescriptions)
router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.get('/profile/:email', userController.getProfile)
router.get('/getAll', userController.getAllDescriptions)
router.put('/profile', userController.updateImage)
router.put('/profile/progress', userController.updateProgress)

module.exports = router