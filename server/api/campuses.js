const router = require("express").Router();
const Campus = require("../../db/models/index").Campus;

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

module.exports = router;
