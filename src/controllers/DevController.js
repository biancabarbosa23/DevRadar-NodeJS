const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')


module.exports = {

    async index(req, res) {
        const devs = await Dev.find()
        return res.json(devs)
    },

    async show(req, res) {
        const dev = await Dev.findById(req.params.id)
        return res.json(dev)
    },

    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body
        //verificar se se encontra cadastrado
        let dev = await Dev.findOne({ github_username })

        if (!dev) {

            const techsArray = parseStringAsArray(techs)

            const response = await axios.get(`https://api.github.com/users/${github_username}`)
            const { name = login, avatar_url, bio } = response.data

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
            return res.json(dev)
        }
        return

    },

    async update(req, res) {
        const { name, bio, techs, latitude, longitude } = req.body

        const techsArray = parseStringAsArray(techs)

        const dev = await Dev.findByIdAndUpdate(req.params.id, {
            name, bio, techs: techsArray, latitude, longitude
        }, { new: true })

        await dev.save()
        return res.json(dev)

    },

    async destroy(req, res) {
        await Dev.findByIdAndDelete(req.params.id)
        return res.json({ mensagem: 'Dev excluído' })
    }
}