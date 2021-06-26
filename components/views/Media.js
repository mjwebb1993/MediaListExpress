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
    ${st.lists.games
      .map(list => {
        return `<tr><td>${list.name}</td><td>${list.genre.join(
          " & "
        )}</td><td>${list.yearReleased}</td><td>${list.console}</td></tr>`;
      })
      .join("")}
  </table>

  <table id="media">
    <tr>
      <th>Name</th>
      <th>Genre</th>
      <th>Year Released</th>
      <th>On Amazon</th>
    </tr>
    ${st.lists.books
      .map(list => {
        return `<tr><td>${list.name}</td><td>${list.genre.join(
          " & "
        )}</td><td>${list.yearReleased}</td><td>Yes</td></tr>`;
      })
      .join("")}
  </table>

  <table id="media">
    <tr>
      <th>Name</th>
      <th>Genre</th>
      <th>Year Released</th>
      <th>Distributor</th>
    </tr>
    ${st.lists.movies
      .map(list => {
        return `<tr><td>${list.name}</td><td>${list.genre.join(
          " & "
        )}</td><td>${list.yearReleased}</td><td>${list.distributor}</td></tr>`;
      })
      .join("")}
  </table>
`;

// function formatGameEntry(list) {
//   return html`
//     <table id="media">
//       <tr>
//         <th>Name</th>
//         <th>Genre</th>
//         <th>Year Released</th>
//         <th>Console</th>
//       </tr>
//       ${list.games
//         .map(list => {
//           return `<tr><td>${list.name}</td><td>${list.genre.join(
//             " & "
//           )}</td><td>${list.yearReleased}</td><td>${list.console}</td></tr>`;
//         })
//         .join("")}
//     </table>
//   `;
// }
