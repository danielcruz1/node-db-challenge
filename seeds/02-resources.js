exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, description: 'desc1', name: 'smart', project_id: 1},
        {id: 2, description: 'desc2', name: 'time', project_id: 2},
        {id: 3, description: 'desc3', name: 'sunset', project_id: 3}
      ]);
    });
};