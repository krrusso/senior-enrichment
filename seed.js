const db = require("./db/index");
const Student = require("./db/models/student");
const Campus = require("./db/models/campus");
const Bluebird = require("bluebird");

const students = [
  {
    name: "Ken Russo",
    email: "krrusso@gmail.com",
    campusId: 4
  },
  {
    name: "Rick James",
    email: "rickJames@chapelle.com",
    campusId: 3
  },
  {
    name: "Sid",
    email: "reddySetGo@gmail.com",
    campusId: 1
  },
  {
    name: "Snow",
    email: "floridaIsCool@aol.com",
    campusId: 2
  },
  {
    name: "joseph ranOuttaNames",
    email: "tooLazy@lazzeeboy.com",
    campusId: 2
  }
];

const campuses = [
  {
    name: "Luna",
    image:
      "https://img.purch.com/h/1000/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzAxOS8wOTEvb3JpZ2luYWwvanVseS1za3l3YXRjaGluZy1wb3J0bGFuZC5qcGc="
  },
  {
    name: "Mars",
    image: "http://space-facts.com/wp-content/uploads/mars.jpg"
  },
  {
    name: "Ganymede",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Ganymede_g1_true-edit1.jpg"
  },
  {
    name: "Death Star",
    image: "https://upload.wikimedia.org/wikipedia/en/e/ee/DeathStar2.jpg"
  }
];

db
  .sync({ force: true })
  .then(() =>
    Promise.all(campuses.map(campus => Campus.create(campus))).then(() =>
      Promise.all(students.map(student => Student.create(student)))
    )
  );
