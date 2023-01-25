const uuid = require('uuid')
const path = require('path')
const { Device, DeviceInfo } = require('../models/models')
const ApiError = require('../error/ApiError')
const  { Op, Sequelize } = require("sequelize");

class DeviceController {
    async create(req, res, next) {
        console.log(req.body.variations);
        try {
            let {name, price, tag, brandId, typeId, img, html, variations, sliderImg, url} = req.body  
 
            const device = await Device.create({ name, price, tag, brandId, typeId, img, html, variations, sliderImg, url })
            
            // if (info) {
            //     info = JSON.parse(info) 
            //     info.forEach(i => 
            //         DeviceInfo.create({
            //             title: i.title, 
            //             description: i.description, 
            //             deviceId: device.id
            //         })
            //     )
            // }  
     
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e))
        }   
    }  
  
    async getAll(req, res) {
        let {brandId, typeId, limit, page } = req.query
        page = page || 1
        limit = limit || 100
        let offset = page * limit - limit
        let devices
        if(!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset, attributes: {exclude: ['html', 'variations', 'sliderImg']},})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll( {where:{brandId}, attributes: {exclude: ['html', 'variations', 'sliderImg']},})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId}, limit, offset, attributes: {exclude: ['html', 'variations', 'sliderImg']},})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll( {where:{typeId, brandId}, limit, offset, attributes: {exclude: ['html', 'variations', 'sliderImg']},})
        }
        return res.json(devices)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            }
        )

        const similarDevices = await Device.findAll(
            {
                where: {
                    tag: {
                        [Op.match]: Sequelize.fn('to_tsquery', device.tag.replaceAll(' ', ' & '))
                    }
                },
                attributes: {exclude: ['html', 'variations', 'sliderImg']}
            }
        )

        const typeDevices = await Device.findAll(
            {
               where: {
                typeId: device.typeId
               },
               attributes: {exclude: ['html', 'variations', 'sliderImg']}
            }
        )
        return res.json({device, typeDevices, similarDevices})
    }

    async remove (req, res) {
        try {
            console.log(req.params.id);
            const postId = req.params.id
    
            await Device.destroy({
                where: {id: postId},
            })

            const devices = await Device.findAll()
            
            return res.json(devices)
    
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'Не удалось получить девайс'
            })
        }
    }
}

module.exports = new DeviceController()