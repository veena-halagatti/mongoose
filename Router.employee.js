//Importing packages
const express = require("express");
const employee = require("../Model/Model.employee");
const app = require("../app");

//for routing
const router = express.Router();

router.get("/", async (req, res) => {
  const emp = await employee.find();
  res.json(emp);
});
router.post("/create", (req, res) => {
  const emp = new employee({
    name: req.body.name,
    gender: req.body.gender,
    age: req.body.age,
    salary: req.body.salary,
  });
  try {
    const a1 = emp.save();
    res.json(a1);
  } catch {}
});

router.post("/update", async (req, res) => {
  const emp = await employee
    .updateOne({ name: req.body.name }, { age: 24 }, (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        console.log("DOCS", docs);
      }
    })
    .clone();
});
router.post("/delete", async (req, res) => {
  const emp = await employee
    .deleteOne({ name: req.body.name }, (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        console.log("DOCS", docs);
      }
    })
    .clone();
});

module.exports = router;
