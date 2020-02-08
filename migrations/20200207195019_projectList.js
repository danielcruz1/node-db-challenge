exports.up = async function(knex) {
    await knex.schema.createTable('projects', (project)=>{
        project.increments()
        project.string('name').notNullable()
        project.string('description')
        project.boolean('completed').notNullable().defaultTo(0)
    })

    await knex.schema.createTable('resources', (resource)=>{
        resource.increments()
        resource.string('name').notNullable().unique()
        resource.string('description')
        resource.integer('project_id').notNullable().references('id').inTable('projects')
    })

    await knex.schema.createTable('task', (todo)=>{
        todo.increments()
        todo.string('description').notNullable()
        todo.string('notes')
        todo.boolean('completed').defaultTo(0)
        todo.integer('project_id').notNullable().references('id').inTable('projects')
    })

    await knex.schema.createTable('project-resources', (pr)=>{
        pr.integer('project_id').notNullable().references('id').inTable('projects')
        pr.integer('resource_id').notNullable().references('id').inTable('resources')
        pr.primary(['project_id', 'resource_id'])
      })

      await knex.schema.createTable('project-tasks', (pt)=>{
        pt.integer('project_id').notNullable().references('id').inTable('projects')
        pt.integer('task_id').notNullable().references('id').inTable('tasks')
        pt.primary(['project_id', 'task_id'])
      })
  };

  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('project-tasks')
    await knex.schema.dropTableIfExists('project-resources')
    await knex.schema.dropTableIfExists('task')
    await knex.schema.dropTableIfExists('resources')
    await knex.schema.dropTableIfExists('projects')
  };