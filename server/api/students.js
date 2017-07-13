const router = require("express").Router();
const Student = require("../../db/models/index").Student;

router.get("/", (req, res, next) => {
  console.log("----------------=-=-=-=-=", Student);
  Student.findAll().then(students => res.json(students)).catch(next);
});

router.get("/:id", (req, res, next) => {
  Student.findById(req.params.id).then(student => {
    res.json(student).catch(next);
  });
});

router.post("/", (req, res, next) => {
  Student.create(req.body).then(students => res.json(students)).catch(next);
});

module.exports = router;
