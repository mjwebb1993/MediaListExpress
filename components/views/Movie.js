import html from "html-literal";

export default st => html`
  This is the Media WIP page! This is a test!
  <table id="media">
    <tr>
      <th>Name</th>
      <th>Genre</th>
      <th>Year Released</th>
      <th>Distributor</th>
    </tr>
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
