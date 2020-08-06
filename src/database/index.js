const knex = require('knex')

const env = process.env.DB_ENV || 'development'
const knexfile = require('../../knexfile');

const db = knex(knexfile[env])

module.exports = db;