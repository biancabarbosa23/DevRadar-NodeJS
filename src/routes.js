const { Router } = require('express')

const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

//Query Params : req.query (Filtros, ordenação, paginação...)
//Route Params : req.params (Identificar um recurso na alteração ou remoção)
//body : req.body (Dados passados pelo body para alteração ou criação de registros)

routes.get('/devs', DevController.index)
routes.get('/devs/:id', DevController.show)
routes.post('/devs', DevController.store)
routes.put('/devs/:id', DevController.update)
routes.delete('/devs/:id', DevController.destroy)

routes.get('/search', SearchController.index)

module.exports = routes