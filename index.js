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
//   name: "Aji a Wijaasyaaa",
//   email: "ajiladsafasdfasdfasdangaaaaa123123123112asdfasf.exi31231223123@hacktiv8.com",
//   phone: "0911231231"
// }).then((teacher, err) => {
//   // console.log(teacher.dataValues.id);
//   Student.create({
//     first_name: "Yoni",
//     last_name: "Putra",
//     gender: "male",
//     birthday: "1994-03-10",
//     email: "yoniputra@yahoo.com",
//     phone: "0899123131",
//     teacher_id: teacher.dataValues.id
//   })
// })


Student.findOne({
  where: {
    id: 9
  },
  attributes: ['teacher_id', 'first_name', 'last_name']
}).then((student, err) => {
  // console.log(`${student.dataValues.teacher_id}`)
  Teacher.findOne({
    where: {
      id: student.dataValues.teacher_id
    }
  }).then((teacher, err)=>{
    // console.log(student.dataValues.first_name);
    // console.log(teacher.dataValues.name);
    console.log(`Student's Name : ${student.dataValues.first_name} ${student.dataValues.last_name}, Teacher's Name : ${teacher.dataValues.name}`);
  })
})
