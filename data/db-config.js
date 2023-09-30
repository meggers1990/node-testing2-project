const knex = require("knex")
const config = require("../knexfile")

const envioroment = process.env.NODE_ENV || "development"



module.exports = knex(config[envioroment])