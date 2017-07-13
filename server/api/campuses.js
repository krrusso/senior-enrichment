const router = require("express").Router();
const Campus = require("../../db/models/index").Campus;
// var HttpError = require('../../utils/HttpError');

router.param("id", (req, res, next, id) => {
  Campus.findById(id)
    .then(campus => {
      // if (!campus) throw HttpError(404);
      req.requestedCampus = campus;
      next();
      return null;
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  console.log("----------------=-=-=-=-=", Campus);
  Campus.findAll().then(campuses => res.json(campuses)).catch(next);
});

router.get("/:id", (req, res, next) => {
  Campus.findById(req.params.id).then(campus => {
    res.json(campus).catch(next);
  });
});

router.post("/", (req, res, next) => {
  Campus.create(req.body).then(dbRes => res.json(dbRes)).catch(next);
});

router.delete("/:id", (req, res, next) => {
  req.requestedCampus
    .destroy()
    .then(() => {
      res.status(204).end();
    })
    .then(() => {
      res.json("------you have deleted a campus!------");
    })
    .catch(next);
});

module.exports = router;
