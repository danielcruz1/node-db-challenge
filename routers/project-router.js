const express = require('express');
const projects = require('../models/project-model');

const router = express.Router({
  mergeParams: true
});

router.get('/', async(req,res,next)=>{
    try {
      const project = await projects.find()
      res.json(project)
    }
    catch(err){
      next(err)
    }
  })

router.get('/:id/tasks', async(req,res,next) => {
    try{
      const { id } = req.params
      res.json(await projects.getTask(id))
    }
    catch(err){
      next(err)
    }
  })

router.get('/:id/resources', async(req,res,next) => {
    try {
    const { id } = req.params
    res.json(await projects.getResource(id))
    }
    catch(err) {
      next(err)
    }
  })


router.post('/', async (req, res, next) => {
  try {
    const id = await projects.addProject(req.body)
    res.status(201).json({ message: 'Success!'})
  }
  catch(err) {
    next(err)
  }
})


router.post('/:id/tasks', async (req, res, next) => {
  try {
    const id = await projects.addTask(req.body)
    res.status(201).json({ message: 'Success!'})
  }
  catch(err) {
    next(err)
  }
})


router.post('/:id/resources', async (req, res, next) => {
  try {
    const id = await projects.addResource(req.body)
    res.status(201).json({ message: 'Success!'})
  }
  catch(err) {
    next(err)
  }
})

module.exports = router 