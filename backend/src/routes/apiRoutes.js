const express = require("express");
const router = express.Router();
const apiModel = require("../models/apiModel");

router.get("/get", async (req, res) => {
  apiModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});
router.post(`/insert`, async (req, res) => {
  const api = new apiModel({
    name: req.body.name,
    endpoint: req.body.endpoint,
    description: req.body.description,
  });

  try {
    await api.save();
    res.send("data added");
  } catch (err) {
    console.log(err);
  }
});

router.put(`/update`, async (req, res) => {
  const data = req.body.data;
  const id = req.body.id;
  try {
    await apiModel.findByIdAndUpdate(id, {
      name: data.name,
      endpoint: data.endpoint,
      description: data.description,
    });
    res.send("updated");
  } catch (err) {
    console.log(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  await apiModel.findByIdAndDelete(req.params.id).exec();
  res.send(req.params.id);
});

module.exports = router;
