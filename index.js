"use strict"

var models = require('./models')

var Teacher = models.Teacher
var Student = models.Student


// Student.create({
//   name: "lala",
//   teacher_id: 2
// }).catch(function(err) {
//   console.log(err.message);
// })
// Student.create({
//   name: "lele",
//   teacher_id: 2
// }).catch(function(err) {
//   console.log(err.message);
// })

Student.findOne().then((student, err) => {
  student.getTeachers().then((teachers, err) => {
    // console.log(students);
    for (var i = 0; i < teachers.length; i++) {
      console.log(`${student.name} ${teachers[i].name}`)
    }
  })
})

// Teacher.findOne().then((teacher, err) => {
//   teacher.getStudents().then((students, err) => {
//     // console.log(students);
//     for (var i = 0; i < students.length; i++) {
//       console.log(`${teacher.name} ${students[i].name}`)
//     }
//   })
// })
