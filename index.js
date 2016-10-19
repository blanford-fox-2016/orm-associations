"use strict"
var faker = require('faker')

var Sequelize = require('Sequelize')
var sequelize = new Sequelize({
  "storage" : "./db/init.sql",
  "dialect": "sqlite"
})

let models = require('./models')
let Student = models.Student
let Teacher = models.Teacher


// Student.create({
//     firstname: "Goku",
//     lastname: "Kakaroto",
//     birthdate: "2007/05/12",
//     email: "sibokis@gmail.com",
//     phone: "012975288712",
//     age: 9
// })
// Student.get_Name()
// Student.calcAge()

////using faker to create random teachers or students
// Teacher.create({
//   firstname: faker.name.firstName(),
//   lastname: faker.name.lastName(),
//   email: faker.internet.email(),
//   phone: Math.random()*10000000000000000
// })
// Teacher.create({
//   name: "Izhha",
//   email: "foo@bar.com",
//   phone: "8671327781244"
// })

var teacher_student = ()=>{
  for(var i =1; i < 16; i++){
    var x = Math.ceil(Math.random()*10)-1
    Student.update({
      'teacher_id': `"${x}"`
    }, {
      where: {
       'id': i
      }
    })
  }

};

// Teacher.cek_assos()
