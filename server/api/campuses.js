const router = require("express").Router();
const Campus = require("../../db/models/index").Campus;

router.param("id", (req, res, next, id) => {
  Campus.findById(id)
    .then(campus => {
      req.requestedCampus = campus;
      next();
      return null;
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  Campus.findAll()
    .then(campuses => {
      res.send(campuses);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Campus.findById(req.params.id).then(campus => {
    res.json(campus).catch(next);
  });
});

router.post("/", (req, res, next) => {
  Campus.create(req.body)
    .then(campuses => res.send(campuses.dataValues))
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  req.requestedCampus
    .destroy()
    .then(() => {
      res.status(204).end();
    })
    .catch(next);
});

router.put("/:id", function(req, res, next) {
  req.requestedCampus
    .update(req.body)
    .then(function(campus) {
      res.json(campus);
    })
    .catch(next);
});

module.exports = router;
