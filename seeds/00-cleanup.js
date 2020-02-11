exports.seed = async function(knex) {
  await knex('project-tasks').truncate()
  await knex('project-resources').truncate()
  await knex('task').truncate()
  await knex('resources').truncate()
  await knex('projects').truncate()
}
