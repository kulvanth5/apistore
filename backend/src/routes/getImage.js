const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", (req, res) => {
  const { image } = req.body;
  const imageData = image.substring(image.indexOf(",") + 1);

  axios({
    method: "post",
    url: "https://api.remove.bg/v1.0/removebg",
    data: {
      image_file_b64: imageData,
    },
    responseType: "json",
    headers: {
      "X-Api-Key": "YnYYW9nhfc35KDMEX5NTNvb2",
      Accept: "application/json",
    },
  })
    .then((response) => {
      // console.log(response.data.data.result_b64);
      console.log("bg removed and is being sent to client");
      let data = `data:image/jpeg;base64,${response.data.data.result_b64}`;
      return res.json({ image: data });
    })
    .catch((error) => {
      console.error("Request failed:", error.response.data);
      return res.end();
    });
});
module.exports = router;
