'use strict';

var HapiServer = require('./src/config/hapi');

var Mongoose = require('mongoose');

require('./src/database/mongodb');

var User = require("./src/database/models/user");
//Uncomment this to seed admin account 
// User.create({
//   firstname: "Nelson",
//   lastname: "Cabaluna",
//   middlename: "Palotao", 
//   address: "Lumbayao",
//   birthday: "Mar 25 2019",
//   phone_number: "09978726641",
//   email: "admin@test.com",
//   password: "123",
//   scope: ["admin"],
//   isVoid: false,
// })
//   .then(() => console.log("Successfully seed database hehe..."))
//   .catch((err) => console.log("Error ", err))


HapiServer.start(function () {
  console.log(`========================================`);
  console.log(`🚀 App listening on port ${HapiServer.info.port}`);
  console.log(`========================================`);
});
