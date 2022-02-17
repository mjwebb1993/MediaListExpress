// /* eslint-disable no-prototype-builtins */
// const express = require("express");
// const router = express.Router();
// const Media = require("../models/media");
// const Customer = require("../models/customer");
// const Pizza = require("../models/pizza");

// // Create a new Media with customer, pizza, delivery and notes documents
// router.post("/", (request, response) => {
//   const body = request.body;

//   // Create the subdocuments
//   const customer = new Customer.model(body.customer);
//   customer.save();

//   const newMedia = new Media.model({});

//   const pizzaIds = body.pizzas.map(pizza => {
//     const newPizza = new Pizza.model({ ...pizza, media: newMedia._id });
//     newPizza.save();
//     return newPizza._id;
//   });

//   newMedia.pizzas = pizzaIds;
//   newMedia.customer = customer._id;
//   newMedia.notes = body.notes;
//   newMedia.status = body.status;

//   newMedia.save((error, data) => {
//     return error ? response.sendStatus(500).json(error) : response.json(data);
//   });
// });

// // Retrieve a single Media with the option to not populate the subdocuments
// router.get("/:id", (request, response) => {
//   // Request parameters (params) are defined in the route, queryParams are provided after the url behind a ? and & in key=value pairs
//   const params = request.params;
//   const query = request.query;
//   if (query.hasOwnProperty("raw") && query.raw === "true") {
//     Media.model.findById(params.id, (error, data) => {
//       return error ? response.sendStatus(500).json(error) : response.json(data);
//     });
//   } else {
//     Media.model
//       .findById(params.id)
//       .populate("customer")
//       .populate("pizzas")
//       .exec((error, data) => {
//         return error
//           ? response.sendStatus(500).json(error)
//           : response.json(data);
//       });
//   }
// });

// // Retrieve all Medias with the option to not populate the subdocuments
// router.get("/", (request, response) => {
//   const query = request.query;
//   if (query.hasOwnProperty("raw") && query.raw === "true") {
//     Media.model.find({}, (error, data) => {
//       return error ? response.sendStatus(500).json(error) : response.json(data);
//     });
//   } else {
//     Media.model
//       .find({})
//       .populate("customer")
//       .populate("pizzas")
//       .exec((error, data) => {
//         return error
//           ? response.sendStatus(500).json(error)
//           : response.json(data);
//       });
//   }
// });

// // Update a single Medias pizza, delivery and notes subdocuments
// router.put("/:id", (request, response) => {
//   const data = request.body;
//   Media.model.findByIdAndUpdate(
//     request.params.id,
//     {
//       $set: {
//         delivery: data.delivery,
//         notes: data.notes
//       }
//     },
//     (error, data) => {
//       data.pizzas.forEach(pizza => {
//         Pizza.model.findByIdAndUpdate(
//           pizza._id,
//           {
//             $setOnInsert: {
//               crust: pizza.crust,
//               cheese: pizza.cheese,
//               sauce: pizza.sauce,
//               toppings: pizza.toppings,
//               Media: pizza.Media
//             }
//           },
//           { upsert: true, new: true },
//           error => {
//             return response.sendStatus(500).json(error);
//           }
//         );
//       });

//       return error ? response.sendStatus(500).json(error) : response.json(data);
//     }
//   );
// });

// // Remove a single Media and it's subdocuments
// router.delete("/:id", (request, response) => {
//   Media.model.findByIdAndDelete(request.params.id, {}, (error, data) => {
//     if (error) response.sendStatus(500).json(error);

//     Pizza.model
//       .deleteMany()
//       .where("_id")
//       .in(data.pizzas)
//       .exec(error => {
//         if (error) return response.sendStatus(500).json(error);
//       });

//     Customer.model.findByIdAndRemove(data.customer, error => {
//       if (error) return response.sendStatus(500).json(error);
//     });

//     return response.json(data);
//   });
// });

// module.exports = router;
