exports.up = function(knex, Promise) {
  return knex.schema.createTable('jokes', (table) => {
    table.increments('id');
    table.text('text').notNullable().defaultsTo('');
    table.text('url').notNullable().defaultsTo('');
  })
  
};

exports.down = function(knex, Promise) {
  
};
