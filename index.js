 "use strict"
// var validator = require('validator');
 var models = require('./models')
//
var Student = models.students
var Teacher = models.Teacher
//
//console.log(Student);
Student.create({
  first_name: "aji",
  last_name: "diobok",
  email: "ajilantan@mangki.com",
  age: 34,
  phone:08573060703
})
Student.create({
  first_name: "alex",
  last_name: "diobok",
  email: "ajilantan@begitu.com",
  age: 34,
  phone:08573060703
})
Student.create({
  first_name: "kaw",
  last_name: "diobok",
  email: "ajilantan@kaskus.com",
  age: 34,
  phone:08573060703
})
Student.create({
  first_name: "afa",
  last_name: "diobok",
  email: "ajilantan@mama.com",
  age: 34,
  phone:08573060703
})
Student.create({
  first_name: "afa",
  last_name: "diobok",
  email: "ajilantan@itulah.com",
  age: 34,
  phone:08573060703
})
// Student.get_name("alex")
// Student.get_age(20)

Teacher.create({
  name: "Ka widi",
  email: "widi@haiil.com",
  phone:08380678111
})
Teacher.create({
  name: "Ka widi 2",
  email: "widi1@hotmail.com",
  phone:08380678111
})
Teacher.create({
  name: "wancurr 10",
  email: "widi2@yahoo.com",
  phone:08380678111
})
Teacher.create({
  name: "Ka widi 4",
  email: "widi3@rocketmail.com",
  phone:08380678111
})
Teacher.create({
  name: "Ka widi 5",
  email: "widi@myspace.com",
  phone:08380678111
})
Teacher.create({
  name: "Ka widi 6",
  email: "widi@akademos.com",
  phone:08380678111
})
Teacher.create({
  name: "Ka widi 7",
  email: "widi@bing.com",
  phone:08380678111
})
Teacher.create({
  name: "Ka widi 8",
  email: "widi@live.com",
  phone:08380678111
})
Teacher.create({
  name: "Ka widi 9",
  email: "widi@rock.com",
  phone:08380678111
})



//console.log(validator.isEmail('ajilantag@bar.com'));
// console.log('ajilantag@bar.com').then(function(err){
//   if(err){
//     console.log("email error");
//   }
// });
