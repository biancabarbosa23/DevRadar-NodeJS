const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(req, res) {
        const { latitude, longitude, techs } = req.query

        const techsArray = parseStringAsArray(techs)

        //Buscar em um radio de 10KM
        const devs = await Dev.find({
            techs: { $in: techsArray },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        })

        //Filtrar por tecnologias
        return res.json(devs)
    }
}