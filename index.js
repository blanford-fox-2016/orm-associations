"use strict"

let models = require('./models/index')
let faker = require('faker')

//
// models.Teacher.addTeacher('Haidar','haidar@gmail.com').then(function(promise){
//   models.Student.addStudent('Ahyana',16,'ahyana@gmail.com','0834567890',promise.dataValues.id)
// })



// for(var i=0; i<19; i++){
//   models.Student.create({
//     name:faker.name.firstName(),
//     age:Math.ceil(Math.random()*12+10),
//     email:faker.internet.email(),
//     phone:(faker.phone.phoneNumber()).toString(),
//     teacher_id:Math.ceil(Math.random()*3)
//   })
// }
let showTeacherOfStudent = (student_id)=>{ //CAN RUN WITHOUT ASSOCIATION
  models.Student.findOne({
    where:{id:student_id},
    attributes:['name','teacher_id']
  }).then(function(student,err){
    models.Teacher.findOne({
      where:{
        id:student.dataValues.teacher_id
      }
    }).then(function(teacher, err){
      console.log(`Student ${student.dataValues.name} has teacher ${teacher.dataValues.name}`);
    })
  })
}

showTeacherOfStudent(4)
