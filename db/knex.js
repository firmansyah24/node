const environtment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')

const environtmentConfig = config[environtment]
const knex = require('knex')

const connection = knex(environtmentConfig)

module.exports = connection