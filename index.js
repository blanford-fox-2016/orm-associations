"use strict"

var models = require('./models')

var Teacher = models.Teacher
var Student = models.Student



// Student.create({
//   name: "lolo",
//   TeacherId: 1
// }).catch(function(err) {
//   console.log(err.message);
// })


// Student.findAll({
//   where: {
//     TeacherId: 1
//   }
// }).then(function (data) {
//   for (var i = 0; i < data.length; i++) {
//     console.log(`${data[i].id}. ${data[i].name}`)
//   }
// })

Teacher.findAll({
  where: {
    StudentId: 1
  }
}).then(function (data) {
  for (var i = 0; i < data.length; i++) {
    console.log(`${data[i].id} ${data[i].name}`)
  }
})
