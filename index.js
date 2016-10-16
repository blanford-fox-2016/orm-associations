"use strict"

let models = require('./models')

let Teacher = models.Teacher
let Student = models.Student

// Teacher.create({
//   name: "dhar",
//   email: "dhar@yahoo.com",
//   phone: "1234567891"
// }).then(() => {
//   console.log(`Data Created Successsfully`)
// }).catch((err) => {
//   if(err){
//     console.log(err.message)
//   }
// })

// Teacher.create({
//   name: "Guru1",
//   email: "Guru1@hacktiv8.com",
//   phone: "0911231231"
// }).then((teacher, err) => {
//   // console.log(teacher.dataValues.id);
//   Student.create({
//     first_name: "murid1",
//     last_name: "Putra",
//     gender: "male",
//     birthday: "1994-03-10",
//     email: "murid1@yahoo.com",
//     phone: "0899123131",
//     teacherId: teacher.dataValues.id
//   })
// })


Student.findOne({
  where: {
    id: 1
  },
  include: {
    model: Teacher
  }
}).then((student, err) => {
  // console.log(`${student.dataValues.first_name}`)
  student.getTeacher().then((teacher, err) => {
    console.log(`Student's Name : ${student.dataValues.first_name}\nTeacher's Name ${teacher.dataValues.name}`)
  })
})
