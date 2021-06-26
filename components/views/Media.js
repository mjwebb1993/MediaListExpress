import html from "html-literal";

export default st => html`
  <div id="media-page">
    <h2>List of All Media:</h2>
  </div>
  <div id="media-border">
    <table id="media">
      <thead>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Year Released</th>
          <th>Console</th>
        </tr>
      </thead>
      ${st.lists.games
        .map(list => {
          return `<tr><td>${list.name}</td><td>${list.genre.join(
            " & "
          )}</td><td>${list.yearReleased}</td><td>${list.console}</td></tr>`;
        })
        .join("")}
    </table>

    <table id="media">
      <thead>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Year Released</th>
          <th>On Amazon</th>
        </tr>
      </thead>
      ${st.lists.books
        .map(list => {
          return `<tr><td>${list.name}</td><td>${list.genre.join(
            " & "
          )}</td><td>${list.yearReleased}</td><td>Yes</td></tr>`;
        })
        .join("")}
    </table>

    <table id="media">
      <thead>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Year Released</th>
          <th>Distributor</th>
        </tr>
      </thead>
      ${st.lists.movies
        .map(list => {
          return `<tr><td>${list.name}</td><td>${list.genre.join(
            " & "
          )}</td><td>${list.yearReleased}</td><td>${
            list.distributor
          }</td></tr>`;
        })
        .join("")}
    </table>
  </div>
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
