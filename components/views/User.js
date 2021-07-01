import html from "html-literal";

export default st => html`
  <div id="media-page">
    <h2>User Lists:</h2>
  </div>
  <section id="game-page">
    <div class="user-flex">
      <h2>User Future List:</h2>
      ${st.futureListMovie
        .map(list => {
          return formatMovie(list);
        })
        .join("")}
      ${st.futureListGame
        .map(list => {
          return formatBook(list);
        })
        .join("")}
      ${st.futureListBook
        .map(list => {
          return formatGame(list);
        })
        .join("")}
    </div>
    <div class="user-flex">
      <h2>User Past List:</h2>
      ${st.pastListMovie
        .map(list => {
          return formatMovie(list);
        })
        .join("")}
      ${st.pastListGame
        .map(list => {
          return formatGame(list);
        })
        .join("")}
      ${st.pastListBook
        .map(list => {
          return formatBook(list);
        })
        .join("")}
    </div>
  </section>
`;

function formatBook(list) {
  return `
  <h3>Book Name: ${list.name}</h3>
  <img src=${list.picUrl}>
  <h4>Book Info</h4>
  <h5>Genre: ${list.genre}<br>
  Released: ${list.yearReleased}<br>
  Author: ${list.author}</h5>
  `;
}
function formatGame(list) {
  return `
  <h3>Game Name: ${list.name}</h3>
  <img src=${list.picUrl}>
  <h4>Game Info</h4>
  <h5>Genre: ${list.genre}<br>
  Released: ${list.yearReleased}<br></h5>
  `;
}
function formatMovie(list) {
  return `
  <h3>Movie Name: ${list.name}</h3>
  <img src=${list.picUrl}>
  <h4>Movie Info</h4>
  <h5>Genre: ${list.genre}<br>
  Released: ${list.yearReleased}<br></h5>
  `;
}
