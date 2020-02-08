exports.up = async function(knex) {
    await knex.schema.createTable("projects", (project) => {
        project.increments("id")
        project.string("project_name").notNullable()
        project.string("project_description")
        project.boolean("completed").notNullable()
    })

    await knex.schema.createTable("resources", (resource) =>  {
        resource.increments("id")
        resource.string("resource_name").notNullable().unique()
        resource.string("resource_description")
    })

    await knex.schema.createTable("tasks", (task) =>  {
        task.increments("id")
        task.integer("project_id")
            .notNullable()
            .references("id")
            .inTable("projects")
        task.string("task_description").notNullable()
        task.string("notes")
        task.boolean("completed")
            .notNullable()
            .defaultTo(false)
    })

    await knex.schema.createTable("project_resources", (pr) =>  {
        pr.integer("project_id")
            .references("id")
            .inTable("projects")
        pr.integer("resource_id")
            .references("id")
            .inTable("resources")
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("project_resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
};