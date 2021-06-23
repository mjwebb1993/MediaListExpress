// const express = require("express");
// const router = express.Router();
// const MediaList = require("../models/mediaList");

// router.post("/", (request, response) => {
//   const newMediaList = new MediaList.model(request.body);
//   newMediaList.save((err, mediaList) => {
//     return err ? response.sendStatus(500).json(err) : response.json(mediaList);
//   });
// });

// router.get("/", (request, response) => {
//   MediaList.model.find({}, (error, data) => {
//     if (error) return response.sendStatus(500).json(error);
//     return response.json(data);
//   });
// });

// module.exports = router;
