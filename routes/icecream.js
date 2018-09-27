const express = require ('express')
const router  = express.Router()
const knex = require('../db/knex')

const queries = require('../db/queries')

router.get('/users', (req, res) => {
    queries
    .User
    .getAll()
    .then(Users => {
        res.json(Users)
    })
})

router.get('/users/:id', (req, res) => {
    queries
    .User
    .getById(req.params.id)
    .then(Users => {
        res.json(Users)
    })
})

router.get('/users/:firstname', (req, res) => {
    queries
    .User
    .getByName(req.params.firstname)
    .then(Users => {
        res.json(Users)
    })
})

router.post('/users', (req, res) => {
    queries
    .User
    .create(req.body)
    .then(Users => {
        res.json(Users)
    })
})

router.put('/users/:id', (req, res) => {
    return knex('Users').where({id: req.params.id}).update(req.body).returning('id')
    .then(Users => {
        res.send(Users)
    })
})

router.delete('/users/:id', (req, res) => {
    return knex('Users').where({id: req.params.id}).delete()
    .then(Users => {
        res.send(Users)
    })
})

router.get('/products', (req, res) => {
    queries
    .Product
    .getAll()
    .then(Product => {
        res.json(Product)
    })
})

router.get('/products/:id', (req, res) => {
    queries
    .Product
    .getById(req.params.id)
    .then(Product => {
        res.json(Product)
    })
})

router.post('/products', (req, res) => {
    queries
    .Product
    .create(req.body)
    .then(Product => {
        res.send(Product)
    })
})

router.put('/products/:id', (req, res) => {
    return knex('Products').where({id: req.params.id}).update(req.body).returning('id')
    .then(Product => {
        res.send(Product)
    })
})

router.get('/categories', (req, res) => {
    queries
    .Categories
    .getAll()
    .then(Categories => {
        res.json(Categories)
    })
})

router.get('/categories/:id', (req, res) => {
    queries
    .Categories
    .getById(req.params.id)
    .then(Categories => {
        res.json(Categories)
    })
})

router.post('/categories', (req, res) => {
    queries
    .Categories
    .create(req.body)
    .then(Categories => {
        res.send(Categories)
    })
})

router.get('/images', (req, res) => {
    queries
    .Image
    .getAll()
    .then(Images => {
        res.json(Images)
    })
})

router.get('/images/:id', (req, res) => {
    queries
    .Image
    .getById(req.params.id)
    .then(Images => {
        res.json(Images)
    })
})

router.post('/images', (req, res) => {
    queries
    .Image
    .create(req.body)
    .then(Images => {
        res.send(Images)
    })
})

module.exports = router