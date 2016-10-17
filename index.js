"use strict"
let models = require('./models');
let Student = models.Student;
let Teacher = models.Teacher;
let StudentTeacher = models.StudentTeacher;
let Sequelize = require('Sequelize');
const faker = require('faker');

let sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/init.sql'
});
let generateRelation = () => {
  for (var i = 1; i < 7; i++) {
    for (var j = 0; j < 9; j++) {
      StudentTeacher.create({
        StudentId: i,
        TeacherId: j+18
      })
    }
  }
}

// Student.create({
//   first_name: "Ren",
//   last_name: "Kiryu",
//   birthday: "1998-03-02",
//   gender: "female",
//   email: "kiryuren@gmail.com",
//   phone: "08988758832",
//   age: 18
// })

// Student.create({
//   first_name: "Bucky",
//   last_name: "Barnes",
//   birthday: "1901-07-04",
//   gender: "male",
//   email: "winter@soldi.er",
//   phone: "085740112321",
//   age: 115
// })
let generatephone = () => {
  var phonenum =[];
  for (var i = 0; i < 10; i++) {
    phonenum.push(Math.ceil(Math.random()*10))
  }
  return phonenum.join("")
}
let addTeachers = () => {
  for (var i = 0; i < 9; i++) {
    Teacher.create({
      name: faker.name.firstName() + " " + faker.name.lastName(),
      email: faker.internet.email(),
      phone: "08" + generatephone()
    })
  }
}

let allTeachers = () => {
  Teacher.findAll().then((data,verr) => {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].dataValues)
    }
  })
}

let teacherOf = (studentId) => {
  models.Student.findOne({
    where: {
      id: studentId
    },
    attributes: ['id', 'name']
  }).then((student, err) => {
    console.log(`Guru dari siswa ${student.dataValues.name} :`);
    models.StudentTeacher.findAll({
      where: {
        StudentId: student.dataValues.id
      },
      attributes: ['TeacherId']
    }).then((teacher, err) => {
      for (var i = 0; i < teacher.length; i++) {
        models.Teacher.findAll({
          where: {
            id: teacher[i].dataValues.TeacherId
          },
          attributes: ['name']
        })
        .then((data,err) => {
          for (var i = 0; i < data.length; i++) {
            console.log(data[i].dataValues.name);
          }
        })
        // console.log(teacher[i].dataValues);
      }
    })
  })
}

let studentOf = (teacherId) => {
  models.Teacher.findOne({
    where: {
      id: teacherId
    },
    attributes: ['id', 'name']
  }).then((teacher, err) => {
    console.log(`Siswa dari guru ${teacher.dataValues.name} :`);
    models.StudentTeacher.findAll({
      where: {
        TeacherId: teacher.dataValues.id
      },
      attributes: ['StudentId']
    }).then((student, err) => {
      for (var i = 0; i < student.length; i++) {
        models.Student.findAll({
          where: {
            id: student[i].dataValues.StudentId
          },
          attributes: ['name']
        })
        .then((data,err) => {
          for (var i = 0; i < data.length; i++) {
            console.log(data[i].dataValues.name);
          }
        })
        // console.log(teacher[i].dataValues);
      }
    })
  })
}

// addTeachers()
// allTeachers()
// generateRelation()
teacherOf(3)
studentOf(25)
