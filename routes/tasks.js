var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var mongoose = require('mongoose');
var Task = require('../models/task')
// var db = {} //mongojs('mongodb://jorge_landaverde:foootball101@ds151242.mlab.com:51242/first_db', ['tasks']);

//mongodb://username:password@host:port/database
// mongoose.connect('mongodb://jorge_landaverde:foootball101@ds151242.mlab.com:51242/first_db');

// mongoose.connect('mongodb://ds151242.mlab.com:51242/first_db',
// {
//   username: 'jorge_landaverde',
//   password: 'foootball101'
// });
//
// var db = mongoose.connection;
// db.on('error', function(error) {
//   console.log(error);
// });
//
// db.once('open', function() {
//   // we're connected!
//   console.log("connected")
// });

router.get('/tasks', function(req, res, next){
  Task.find({})
    .then(function(result) {
      console.log(result)
      res.send(result)
    })
    .catch(function(error) {
      res.send(error)
    })
});

// Get All Tasks
// router.get('/tasks', function(req, res, next){
//
//   db.tasks.find(function(err, tasks){
//     if(err){
//       res.send(err);
//     }
//     res.json(tasks);
//   });
// });
//
// // Get Single Task
// router.get('/task/:id', function(req, res, next){
//     db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
//         if(err){
//             res.send(err);
//         }
//         res.json(task);
//     });
// });
//
// //Save Task
// router.post('/task', function(req, res, next){
//     var task = req.body;
//     if(!task.title || !(task.isDone + '')){
//         res.status(400);
//         res.json({
//             "error": "Bad Data"
//         });
//     } else {
//         db.tasks.save(task, function(err, task){
//             if(err){
//                 res.send(err);
//             }
//             res.json(task);
//         });
//     }
// });
//
// // Delete Task
// router.delete('/task/:id', function(req, res, next){
//     db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
//         if(err){
//             res.send(err);
//         }
//         res.json(task);
//     });
// });
//
// // Update Task
// router.put('/task/:id', function(req, res, next){
//     var task = req.body;
//     var updTask = {};
//
//     if(task.isDone){
//         updTask.isDone = task.isDone;
//     }
//
//     if(task.title){
//         updTask.title = task.title;
//     }
//
//     if(!updTask){
//         res.status(400);
//         res.json({
//             "error":"Bad Data"
//         });
//     } else {
//         db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
//         if(err){
//             res.send(err);
//         }
//         res.json(task);
//     });
//     }
// });

module.exports = router;
