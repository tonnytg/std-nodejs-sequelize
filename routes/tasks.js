var express = require('express');
var router = express.Router();
const models = require('../models');
const Task = models.Task;

/* GET tasks listing. */
router.get('/', function(req, res, next) {
  res.send('Get Task');
});

/* POST tasks listing. */
router.post('/', function(req, res, next) {
  Task.bulkCreate([{
    tarefa: req.body.tarefa,
    status: req.body.status
  },
  ])
      .then((newUsers) => {
        res.json({
          Tarefa: req.body.tarefa,
          Status: req.body.status,
          Return: "Success"
        })
        console.log(newUsers)
      })
      .catch((err) => {
        res.json({
          Return: "Failed"
        })
        console.log("Error while users creation : ", err)
      })
});



module.exports = router;
