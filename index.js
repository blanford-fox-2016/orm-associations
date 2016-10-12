"use strict"

let models = require('./models');
let Student = models.Students;
let Teacher = models.Teachers;
// var Sequelize = require('sequelize');
// require('sequelize-isunique-validator')(Sequelize);

//Teacher Library

let teacherName = [{
  name: "Ababil",
  email: "abah@ggmail.com",
  phone: 685214886547
},
{
  name: "Bruto",
  email: "antara@abah.com",
  phone: 685214886547
},
{
  name: "Charlie",
  email: "antara@emak.com",
  phone: 685214886547
},
{
  name: "Delta",
  email: "antara@ggmail.com",
  phone: 685214886547
},
{
  name: "gama",
  email: "sabar@abah.com",
  phone: 685214886547
},
{
  name: "teta",
  email: "supaya@emak.com",
  phone: 685214886547
},
{
  name: "bobi",
  email: "tidak@ggmail.com",
  phone: 685214886547
},
{
  name: "puseria",
  email: "mengembang@abah.com",
  phone: 685214886547
},
{
  name: "toserba",
  email: "naha@emak.com",
  phone: 685214886547
},
{
  name: "pasar malam",
  email: "supaya@ggmail.com",
  phone: 685214886547
},
{
  name: "main malam",
  email: "menambah@abah.com",
  phone: 685214886547
},
{
  name: "warung kopi",
  email: "tidak@emak.com",
  phone: 685214886547
}
];

/////////


// Student.create({
//   name: "mangku",
//   email: "ahao@aiai.com",
//   phone: 12345678901
// }).catch( (err) => {
//     console.log("Insert the data correctly");
// });

// Teacher.create({
//   name: "Riza Fahmi",
//   email: "yasudahlah@hacktiv8.com",
//   phone: 625845631482
// }).catch( (err) => {
//     console.log("Insert the data correctly");
// });
// let teacher = teacherName[0];

//fillTeacherData(teacherName);

// // Fillout the teacher from data
function fillTeacherData(arr) {
  for (var i = 0; i < arr.length; i++) {
    Teacher.create(arr[i]);
  }
}
//
// Teacher.findAll().then((teachers, err) => {
//   console.log(teachers);
// })
