/* eslint-disable no-prototype-builtins */
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
// import { response } from "express";

const router = new Navigo(window.location.origin);

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;

  router.updatePageLinks();
  addEventListeners(st);
}
function addEventListeners() {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );

  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
  const form = document.querySelector("form");
  document.querySelector("#submitButtonOne").addEventListener("click", () => {
    console.log("I was clicked!");
    userInput();
  });
}

let users = {
  username: "password"
};
function userInput() {
  let userName = document.getElementById("userNameInput").value;
  let userPass = document.getElementById("userPassInput").value;
  users.username = userName;
  users.password = userPass;
  // document.getElementsByClassName("flex-child").classList.toggle("visibility");
  console.log(users);
  // document.querySelector("flex-child").style.visibility = "hidden";
}
// add event listeners for login page

router.hooks({
  before: (done, params) => {
    const page =
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";

    switch (page) {
      case "Media":
        // axios.get("https://medialistapi.herokuapp.com/listMedia").then(
        axios.get(`${process.env.MEDIA_API_URL}/listMedia`).then(response => {
          // console.log("response", response);
          state.Media.lists = [];
          state.Media.lists.games = response.data.Games;
          state.Media.lists.books = response.data.Books;
          state.Media.lists.movies = response.data.Movies;
          let arrayTest = ["test"];
          console.log(arrayTest);
          let arrayFiller = "filler";
          arrayTest.push(arrayFiller, "more test");
          console.log(arrayTest);
          console.log("lists", state.Media.lists);
          done();
        });
        break;
      case "Game":
        state.Game.games = [];
        axios.get(`${process.env.MEDIA_API_URL}/listGames`).then(response => {
          response.data.forEach(game => {
            state.Game.games.push(game);
          });
          done();
        });
        break;
      case "Book":
        state.Book.books = [];
        axios.get(`${process.env.MEDIA_API_URL}/listBooks`).then(response => {
          response.data.forEach(book => {
            state.Book.books.push(book);
          });
          done();
        });
        break;
      case "Movie":
        state.Movie.movies = [];
        axios.get(`${process.env.MEDIA_API_URL}/listMovies`).then(response => {
          response.data.forEach(movie => {
            state.Movie.movies.push(movie);
          });
          done();
        });
        break;
      case "User":
        // axios.get("https://medialistapi.herokuapp.com/listMedia").then(
        axios.get(`${process.env.MEDIA_API_URL}/listMedia`).then(response => {
          state.User.users = [];
          state.User.users.games = response.data.Games;
          state.User.users.books = response.data.Books;
          state.User.users.movies = response.data.Movies;
          let arrayTest = ["test"];
          console.log(arrayTest);
          let arrayFiller = "filler";
          arrayTest.push(arrayFiller, "more test");
          console.log(arrayTest);
          console.log("lists", state.User.users);
          done();
        });
        break;
      case "Home":
        state.Home.examples = [];
        axios.get(`${process.env.MEDIA_API_URL}/listGames`).then(response => {
          // console.log("response", response);
          response.data.forEach(example => {
            if (example.name == "Mass Effect") {
              state.Home.examples.push(example);
            }
          });
          console.log(state.Home.examples);
          done();
        });
        break;
      default:
        done();
    }
  }
});

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();
