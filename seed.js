const db = require("./db/index");
// const Author = require('./server/db/models/author');
const Student = require("./db/models/student");
const Campus = require("./db/models/campus");
const Bluebird = require("bluebird");

const students = [
  {
    name: "Ken Russo",
    email: "krrusso@gmail.com"
  },
  {
    name: "Rick James",
    email: "fuckYoCouch@chapelle.com"
  },
  {
    name: "Sid",
    email: "reddySetGo@gmail.com"
  },
  {
    name: "Snow",
    email: "floridaIsCool@aol.com"
  },
  {
    name: "joseph ranOuttaNames",
    email: "tooLazy@lazzeeboy.com"
  }
];

const campus = [
  {
    name: "Luna",
    image:
      "https://img.purch.com/h/1000/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzAxOS8wOTEvb3JpZ2luYWwvanVseS1za3l3YXRjaGluZy1wb3J0bGFuZC5qcGc="
    // students: students[0]
  },
  {
    name: "Mars",
    image:
      "https://s-media-cache-ak0.pinimg.com/736x/f1/2a/6e/f12a6e46e9293c6ec2c5961cf71c5e65--mars-planet-red-planet.jpg	2017-07-13 14:21:01.33-04	2017-07-13 14:21:01.33-04"
    // students: students[2]
  },
  {
    name: "Ganymede",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Ganymede_g1_true-edit1.jpg"
    // students: [
    //   {
    //     name: "Snow",
    //     email: "floridsIsCool@aol.com"
    //   },
    //   students[0]
    // ]
  },
  {
    name: "Death Star",
    image: "https://upload.wikimedia.org/wikipedia/en/e/ee/DeathStar2.jpg"
  }
];

db.sync({ force: true }).then(() =>
  Promise.all(
    students.map(student => Student.create(student))
    // include: [Campus]
  ).then(() =>
    Promise.all(
      campus.map(campus => Campus.create(campus))
      // .then(function() {
      //   console.log("Finished inserting data");
      // })
      // .catch(function(err) {
      //   console.error("There was an issue with", err, err.stack);
      // })
      // .finally(function() {
      //   db.close();
      //   console.log("connection closed");
      //   return null;
      // }
    )
  )
);
