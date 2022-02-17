// const { Router } = require("express");
// const router = Router();
// const mongoose = require("mongoose");
// const Book = require("../models/book");

// router.post("/", (request, response) => {
//   const newBook = new Book.model(request.body);
//   newBook.save((err, book) => {
//     return err ? response.sendStatus(500).json(err) : response.json(book);
//   });
// });

// router.get("/", (request, response) => {
//   Book.model.find({}, (error, data) => {
//     if (error) return response.sendStatus(500).json(error);
//     return response.json(data);
//   });
// });

// router.get("/:id", (request, response) => {
//   Book.model.findById(request.params.id, (error, data) => {
//     if (error) return response.sendStatus(500).json(error);
//     return response.json(data);
//   });
// });

// router.put("/:id", (request, response) => {
//   const body = request.body;
//   Book.model.findByIdAndUpdate(
//     request.params.id,
//     {
//       $set: {
//         title: body.title,
//         yearReleased: body.yearReleased,
//         genre: body.genre,
//         author: body.author,
//         picUrl: body.picUrl
//       }
//     },
//     (error, data) => {
//       if (error) return response.sendStatus(500).json(error);
//       return response.json(request.body);
//     }
//   );
// });

// router.delete("/:id", (request, response) => {
//   Book.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
//     if (error) return response.sendStatus(500).json(error);
//     return response.json(data);
//   });
// });

// module.exports = router;
