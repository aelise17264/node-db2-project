
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make: 'subru', modle: 'sedan', available: true},
        {make: 'Toyota', modle: 'camry', available: false},
        {make: 'Honda', modle: 'civic', available: true}
      ]);
    });
};
