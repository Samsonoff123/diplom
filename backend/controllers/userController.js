const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Descriptions } = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role, name, age, img, level} = req.body

        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword, name, age, img, level})


        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token, user})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }

    async getProfile(req, res) {
        const {email} = req.params

        const user = await User.findOne(
            {
                where: {email},
            }
        )
        return res.json({user})
    }

    async sendDescriptions(req, res) {
        const {text, userId} = req.body
        const user = await User.findOne(
            {
                where: {id: userId},
            }
        )
        const descriptions = await Descriptions.create({text, user })
            
        return res.json(descriptions)
    }

    async getAllDescriptions(req, res) {
        const descriptions = await Descriptions.findAll()

        return res.json(descriptions)
    }

    async updateProgress(req, res) {
        const { progress, email } = req.body
        const user = await User.update(
            {
                progress
            },
            {
                where: { email }
            }
        )
        return res.json(user)
    }

    async updateImage(req, res) {
        const {img, email} = req.body

        const user = await User.update(
            {
                img
            },
            {
                where: { email }
            }
        )
        return res.json({img})
    }
}

module.exports = new UserController()