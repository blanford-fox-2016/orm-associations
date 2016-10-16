'use strict'

let models = require('./models/index')
// let faker = require('faker')

// for (var i = 0; i < 19; i++) {
//   models.Student.create({
//     name: faker.name.firstName(),
//     age: Math.ceil(Math.random() * 12 + 10),
//     email: faker.internet.email(),
//     phone: (faker.phone.phoneNumber()).toString(),
//     TeacherId: Math.ceil(Math.random() * 3)
//   })
// }
let showTeacherOfStudent = (student_id) => { // CAN RUN WITHOUT ASSOCIATION
  models.Student.findOne({
    where: {id: student_id},
    attributes: ['name', 'TeacherId']
  }).then(function (student, err) {
    models.Teacher.findOne({
      where: {
        id: student.dataValues.TeacherId
      }
    }).then(function (teacher, err) {
      console.log(`Student ${student.dataValues.name} has teacher ${teacher.dataValues.name}`)
    })
  })
}

let findStudentOf = (TeacherId) => {
  models.Teacher.findOne({
    where: {id: TeacherId},
    // include: [{model: models.Student}],
    attributes: ['id', 'name']
  }).then(function (teacher, err) {
    models.Student.findAll({
      where: {TeacherId: teacher.dataValues.id},
      // attributes: ['id', 'name', 'age', 'email', 'phone', 'TeacherId'],
      sort: ['TeacherId', 'ASC']
    }).then(function (data) {
      for (var i = 0; i < data.length; i++) {
        console.log(`Student id ${data[i].dataValues.id} | ${data[i].dataValues.name} | ${data[i].dataValues.age} | ${data[i].dataValues.email} | ${data[i].dataValues.phone} | teacher name : ${data[i].dataValues.TeacherId}`)
      }
    })
  })
  // .then(function (teacher, err) {
  //   teacher.getStudent().then(function (student, err) {
  //     console.log(student)
  //     let teacherStudent = student.getTeacher()
  //     teacherStudent.then(function (new_student, err) {
  //       let studenty = new_student.dataValues.name
  //       console.log(studenty)
  //     })
  //   })
  // })
}
let testAssociation = () => {
  models.Teacher.findOne({
    where: {id: 3}
  }).then(function (data) {
    data.destroy().then(function () {
      console.log(`Data deleted`)
    })
  })
}

// showTeacherOfStudent(4)
// findStudentOf(1)
// testAssociation(3) // DELETE TEACHER ID 3 TO GET NULL ON STUDENT.TEACHER_ID (APPROVED)
// console.log(models.Student.get('name'))

// models.Student.findAll({}).then(function (students) {
//   for (var i = 0; i < students.length; i++) {
//     students[i].update({
//       TeacherId: Math.round(Math.random() * 2)
//     })
//   }
// })
// console.log(models.Student)
models.Student.findAll({
  include:[{
    model: models.Teacher,
    through: {
      attributes:['name'],
      where: {TeacherId: 1}
    }
  }]
}).then(function (item) {
  console.log(item)
})
