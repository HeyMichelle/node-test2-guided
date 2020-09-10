const knex = require("knex")
const knexfile = require("../knexfile")

module.exports = knex(knexfile[process.env.NODE_ENV])


// npm install --save-dev cross-env
//  in package.json make changes