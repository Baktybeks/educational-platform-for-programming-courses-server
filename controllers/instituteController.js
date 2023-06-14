const {Institutes} = require('../models/models')
const ApiError = require('../error/ApiError')
// const uuid = require('uuid')
// const path = require('path')


class InstituteController {
    async create(req, res, next) {
        try {
            const {name_ru, name_kg, short_name_ru, short_name_kg, info} = req.body
            // const {logo} = req.files
            // let fileName = uuid.v4() + ".jpg"
            // logo.mv(path.resolve(__dirname, '..', 'static', fileName))
            const institutes = await Institutes.create({name_ru, name_kg, short_name_ru, short_name_kg /*logo: fileName*/})
            return res.json(institutes)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
        const institutesAll = await Institutes.findAll()
        return res.json(institutesAll)
    }
}

module.exports = new InstituteController()