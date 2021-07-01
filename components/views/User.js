import html from "html-literal";

export default st => html`
  <div id="media-page">
    <h2>User Lists:</h2>
  </div>
  <section id="game-page">
    <div class="user-flex">
      <h2>User Future List:</h2>
      ${st.futureList
        .map(list => {
          return formatMovie(list);
        })
        .join("")}
    </div>
    <div class="user-flex">
      <h2>User Past List:</h2>
      ${st.pastList
        .map(list => {
          return formatMovie(list);
        })
        .join("")}
    </div>
  </section>
`;

function formatMovie(list) {
  return `
  <h3>Book Name: ${list.name}</h3>
  <img src=${list.picUrl}>
  <h4>Book Info</h4>
  <h5>Genre: ${list.genre}<br>
  Released: ${list.yearReleased}<br>
  Author: ${list.author}</h5>
  `;
}
