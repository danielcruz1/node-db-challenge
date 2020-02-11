exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project-tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('project-tasks').insert([
        {project_id: 1, task_id: 1},
        {project_id: 1, task_id: 2},
        {project_id: 3, task_id: 3}
      ]);
    });
};
