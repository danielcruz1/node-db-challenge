const db = require('../data/db-config');

function find() {
    return db('projects')
}

function getTask(project_id) {
    return db('task').where({project_id})

}

function getResource(project_id) {
    return db('resources').where({project_id})
}

function addProject(payload) {
    return db.insert('projects').insert(payload)
}


function addTask(payload) {
    return db.insert('task').insert(payload)
}

async function addResource(data) {
    return db("resources").insert(data)
} 

module.exports ={
    find,
    getTask,
    getResource,
    addProject,
    addTask,
    addResource
} 