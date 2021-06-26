import html from "html-literal";

export default st => html`
  This is the Media WIP page! This is a test!
  <table id="media">
    <tr>
      <th>Name</th>
      <th>Genre</th>
      <th>Year Released</th>
      <th>Console</th>
    </tr>
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
