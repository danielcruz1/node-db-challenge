
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, notes:'unknown', description: 'study hard', completed:0, project_id: 1},
        {id: 2, notes:'none', description: 'work hard', completed:0, project_id: 1},
        {id: 3, notes:'not right now', description: 'play hard', completed:0, project_id: 1}
      ]);
    });
};