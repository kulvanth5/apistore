const express = require("express");
const router = express.Router();
const { User } = require("../models/userModels");
const Joi = require("joi");
const bcrypt = require("bcrypt");

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(401).send({ messag: "Invalid Email or Password" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password,
    );
    if (!validPassword)
      return res.status(401).send({ message: "Invalid email or Password" });

    const token = user.generateAuthToken();
    res.status(200).send({ data: token, message: "Logged in successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;
