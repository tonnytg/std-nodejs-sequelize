var express = require('express');
var router = express.Router();
const models = require('../models');
const Task = models.Task;

/* GET tasks listing. */
router.get('/', async function(req, res, next) {
    const tasks = await Task.findAll();
    // console.log(tasks.every(task => task instanceof Task)); // true
    // console.log("All tasks:", JSON.stringify(tasks, null, 2));
    res.json({
        Tasks: tasks
    })
});

/* POST tasks listing. */
router.post('/', function(req, res, next) {
  Task.bulkCreate([{
    tarefa: req.body.tarefa,
    status: req.body.status
  },
  ])
      .then((newTask) => {
        res.json({
          Tarefa: req.body.tarefa,
          Status: req.body.status,
          Return: "Success"
        })
        console.log(newTask)
      })
      .catch((err) => {
        res.json({
          Return: "Failed"
        })
        console.log("Error while users creation : ", err)
      })
});



module.exports = router;
