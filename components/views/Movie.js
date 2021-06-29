import html from "html-literal";

export default st => html`
  <section id="game-page">
    ${st.movies
      .map(movie => {
        return formatMovie(movie);
      })
      .join("")}
  </section>
`;

function formatMovie(movie) {
  return `
    <div class="game-flex">
    <h3>Movie Name: ${movie.name}</h3>
    <h4>Movie Info</h4>
    <h5>Genre: ${movie.genre.join(" & ")}<br>
    Released: ${movie.yearReleased}<br>
    Studio: ${movie.distributor}</h5>
    <img src=${movie.picUrl}>
    </div>
  `;
}

// export default st => html`
//   <h2>List of All Movies:</h2>
//   <table id="media">
//     <thead>
//       <tr>
//         <th>Name</th>
//         <th>Genre</th>
//         <th>Year Released</th>
//         <th>Distributor</th>
//       </tr>
//     </thead>
//     ${st.movies
//       .map(movie => {
//         return `<tr><td>${movie.name}</td><td>${movie.genre.join(
//           " & "
//         )}</td><td>${movie.yearReleased}</td><td>${
//           movie.distributor
//         }</td></tr>`;
//       })
//       .join("")}
//   </table>
// `;
