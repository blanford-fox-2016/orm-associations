"use strict"
let models = require('./models');
let Student = models.Student;
let Teacher = models.Teacher;
let Sequelize = require('Sequelize');
const faker = require('faker');

let sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/init.sql'
});

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
function generatephone() {
  var phonenum =[];
  for (var i = 0; i < 10; i++) {
    phonenum.push(Math.ceil(Math.random()*10))
  }
  return phonenum.join("")
}
function addTeachers() {
  for (var i = 0; i < 9; i++) {
    Teacher.create({
      name: faker.name.firstName() + " " + faker.name.lastName(),
      email: faker.internet.email(),
      phone: "08" + generatephone()
    })
  }
}
addTeachers()
