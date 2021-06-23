// require("dotenv").config();
// const mongoose = require("mongoose");
// const express = require("express");
// const app = express();
// mongoose.connect(process.env.DB_CONNECT);
// const MongoClient = require("mongodb").MongoClient;
// const morgan = require("morgan");
// const mediaLists = require("./controllers/mediaLists");
// // const db = mongoose.connection;

// // Mongo/Mongoose connections through line 16

// app.use(morgan("dev")); // use the myMiddleware for every request to the app
// app.use(express.json());

// let db;
// const con = MongoClient.connect(
//   `${process.env.DB_CONNECT}`,
//   (err, database) => {
//     if (err) return console.log(err);
//     db = database.db("Cluster0");
//     console.log("Connected to npm start DataBase");
//   }
// );

// // these lines are always top

// const myMiddleware = (request, response, next) => {
//   // do something with request and/or response
//   console.log(request.method, request.path);
//   next(); // tell express to move to the next middleware function
// };
// // CORS Middleware
// const cors = (request, response, next) => {
//   response.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type, Accept,Authorization,Origin"
//   );
//   response.setHeader("Access-Control-Allow-Origin", "*");
//   response.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   response.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// };

// app.use(express.json());
// app.use(myMiddleware);
// app.use(cors);

// app
//   .route("/")
//   .get((request, response) => {
//     response.send("HELLO WORLD");
//   })
//   .post((request, response) => {
//     response.json(request.body);
//   });

// // convert schema model with crud operators

// // app.route("/tests/:id").get((request, response) => {
// //   // express adds a "params" Object to requests
// //   const id = request.params.id;
// //   // handle GET request for post with an id of "id"
// //   response.send("Your ID was ${id}");
// // });
// app.use("/mediaLists", mediaLists);

// app.route("/**").get((request, response) => {
//   response.status(404).send("NOT FOUND");
// });

// // this line is always LAST
// const PORT = process.env.PORT || 4040;
// app.listen(PORT, () => console.log("Listening on port 4040"));
