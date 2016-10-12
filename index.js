"use strict"

let models = require('./models/index')
let faker = require('faker')


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

let findStudentOf=(teacher_id)=>{
  models.Teacher.findOne({
    where:{id:teacher_id},
    include:[{model:models.Student}],
    attributes:['name']
  }).then(function(teacher,err){
    teacher.getStudent().then(function(student,err){
      console.log(student);
      let teacherStudent = student.getTeacher()
      teacherStudent.then(function(new_student,err){
        let studenty = new_student.dataValues.name
      })
    });
  })
}
let testAssociation = () => {
  models.Teacher.findOne({
    where:{id:3}
  }).then(function(data){
    data.destroy().then(function(){
      console.log(`Data deleted`);
    })
  })
}



// showTeacherOfStudent(4)
// findStudentOf(2)
// testAssociation(3) // DELETE TEACHER ID 3 TO GET NULL ON STUDENT.TEACHER_ID (APPROVED)
