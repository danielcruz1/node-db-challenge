exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'school'},
        {id: 2, name: 'family'},
        {id: 3, name: 'retire'}
      ]);
    });
};