var express = require('express');
var router = express.Router();
const testModel = require("../models/testModel")


/* GET users listing. */
router.get('/', async function(req, res, next) {
  let names = await testModel.find();
  res.send(names)
});

router.post("/", async (req, res) => {
  let name = await testModel.create(
      {
        name: req.body.name
      }
  )
  res.send(name)
})

router.delete("/:name", async (req, res) => {
  let name = await testModel.findOneAndDelete({name: req.params.name})
  res.send({delete: name});
})

router.put("/:name", async (req, res) => {
  let name = await testModel.findOneAndUpdate({name: req.params.name}, {name: req.body.name}, {returnDocument: "after"})
  res.send({updated: name});
})

module.exports = router;
