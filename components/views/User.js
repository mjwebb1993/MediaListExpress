import html from "html-literal";

export default st => html`
  <section id="user">
    <div id="media-page">
      <h2>List of User Lists:</h2>
    </div>
    <section id="game-page">
      ${st.users.games
        .map(game => {
          return formatGame(game);
        })
        .join("")}
      ${st.users.movies
        .map(movie => {
          return formatMovie(movie);
        })
        .join("")}
      ${st.users.books
        .map(book => {
          return formatBook(book);
        })
        .join("")}
    </section>
  </section>
`;

function formatGame(game) {
  return `
    <div class="game-flex">
    <h3>Game Name: ${game.name}</h3>
    <img src=${game.picUrl}>
    <h4>Game Info</h4>
    <h5>Genre: ${game.genre.join(" & ")}<br>
    Released: ${game.yearReleased}<br>
    Consoles: ${game.console}</h5>
    </div>
  `;
}
function formatMovie(movie) {
  return `
<div class="game-flex">
<h3>Movie Name: ${movie.name}</h3>
<img src=${movie.picUrl}>
<h4>Movie Info</h4>
<h5>Genre: ${movie.genre.join(" & ")}<br>
Released: ${movie.yearReleased}<br>
Studio: ${movie.distributor}</h5>
</div>
`;
}
function formatBook(book) {
  return `
    <div class="game-flex">
    <h3>Book Name: ${book.name}</h3>
    <img src=${book.picUrl}>
    <h4>Book Info</h4>
    <h5>Genre: ${book.genre.join(" & ")}<br>
    Released: ${book.yearReleased}<br>
    Consoles: ${book.author}</h5>
    </div>
  `;
}
