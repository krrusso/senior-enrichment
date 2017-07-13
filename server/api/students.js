const router = require("express").Router();
const Student = require("../../db/models/index").Student;
// if (!student) throw HttpError(404);

router.param("id", function(req, res, next, id) {
  Student.findById(id)
    .then(function(student) {
      // if (!student) throw HttpError(404);
      req.requestedStudent = student;
      next();
      return null;
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  console.log("----------------=-=-=-=-=", Student);
  Student.findAll().then(students => res.json(students)).catch(next);
});

router.get("/:id", (req, res, next) => {
  Student.findById(req.requestedStudent).then(student => {
    res.json(student).catch(next);
  });
});

router.post("/", (req, res, next) => {
  Student.create(req.body).then(students => res.json(students)).catch(next);
});

router.delete("/:id", (req, res, next) => {
  req.requestedStudent
    .destroy()
    .then(() => {
      res.status(204).end();
    })
    .then(() => {
      res.json("=-=-=-=you have deleted someone...-=-=-=-=");
    })
    .catch(next);
});

module.exports = router;
