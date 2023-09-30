const knex = require('knex')

exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
    table.increments('id');
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
  
};