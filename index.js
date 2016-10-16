"use strict"

let models = require('./models')

let Teacher = models.Teacher
let Student = models.Student
let StudentTeacher = models.StudentTeacher

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


// Student.findOne({
//   where: {
//     id: 1
//   },
//   include: {
//     model: Teacher
//   }
// }).then((student, err) => {
//   // console.log(`${student.dataValues.first_name}`)
//   student.getTeacher().then((teacher, err) => {
//     console.log(`Student's Name : ${student.dataValues.first_name}\nTeacher's Name ${teacher.dataValues.name}`)
//   })
// })

//RELEASE 2

//
// Teacher.create({
//   name: 'Haidar',
//   emai: 'haidar@hacktiv8.com',
//   phone: '1123111123121'
// }).then((teacher) => {
//   console.log(`Teacher Created Successfully`)
// }).catch((err) => {
//   if(err){
//     console.log(err.message)
//   }
// })

// Teacher.create({
//   name: 'Rubi',
//   emai: 'rubi@hacktiv8.com',
//   phone: '1123111123121'
// }).then((teacher) => {
//   console.log(`Teacher Created Successfully`)
//   teacher.setStudents(1,2,3)
// }).catch((err) => {
//   if(err){
//     console.log(err.message)
//   }
// })

Teacher.find({
  where: {
    name: 'Rubi'
  }
}).then((teacher) => {
  // teacher.addStudents(2)
  // teacher.addStudents(3)
  teacher.getStudents({
    attributes: {
      exclude: ['teacherId']//kalau ga pake ada keselect Student.teacherId padahal gada, teacherId ada di tabel penghubung
    }
  }).then((student) => {
    console.log(`Pengajar :${teacher.dataValues.name}`);
    console.log(`Murid : `);
    for (var i in student) {
      console.log(`- ${student[i].dataValues.first_name} ${student[i].dataValues.last_name}`);
    }
  })
})

// Student.create({
//   first_name: 'Ari',
//   last_name: 'lastname',
//   gender: 'male',
//   birthday: '1990-01-01',
//   emai: 'ari@hacktiv8.com',
//   phone: '1123111123121'
// }).then((student) => {
//   console.log(`Student Created Successfully`)
//   student.setTeachers(30)
// }).catch((err) => {
//   if(err){
//     console.log(err.message)
//   }
// })

// Student.create({
//   first_name: 'Tevin',
//   last_name: 'lastname',
//   gender: 'male',
//   birthday: '1990-01-01',
//   emai: 'tevin@hacktiv8.com',
//   phone: '1123111123121'
// }).then((student) => {
//   console.log(`Student Created Successfully`)
//   student.setTeachers(30)
// }).catch((err) => {
//   if(err){
//     console.log(err.message)
//   }
// })


/*Note :
Pengajar : Haidar & Rubi
Murid Haidar & murid Rubi sama2 :
Ari, tevin, Ryan
*/
