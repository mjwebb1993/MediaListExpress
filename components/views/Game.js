import html from "html-literal";

export default st => html`
  <h2>List of All Games:</h2>
  <table id="media">
    <thead>
      <tr>
        <th>Name</th>
        <th>Genre</th>
        <th>Year Released</th>
        <th>Console</th>
      </tr>
    </thead>
    ${st.games
      .map(game => {
        return `<tr><td>${game.name}</td><td>${game.genre.join(
          " & "
        )}</td><td>${game.yearReleased}</td><td>${game.console}</td></tr>`;
      })
      .join("")}
  </table>
`;

// function formatMediaEntry(game) {
//   return `
//     <div class="intro-paragraph">
//       <p>${game.name} was released in ${game.yearReleased} and has the following tags: ${game.genre}</p>
//     </div>
//   `;
// }
