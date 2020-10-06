
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.uuid('id').primary();
      tbl.string('make').notNullable().index()
      tbl.string('modle').notNullable().index()
      tbl.integer('year', 4)
      tbl.integer('mileage')
      tbl.boolean('available').notNullable().defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
