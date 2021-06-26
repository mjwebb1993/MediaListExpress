import html from "html-literal";

export default st => html`
  <h2>List of All Movies:</h2>
  <table id="media">
    <thead>
      <tr>
        <th>Name</th>
        <th>Genre</th>
        <th>Year Released</th>
        <th>Distributor</th>
      </tr>
    </thead>
    ${st.movies
      .map(movie => {
        return `<tr><td>${movie.name}</td><td>${movie.genre.join(
          " & "
        )}</td><td>${movie.yearReleased}</td><td>${
          movie.distributor
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
