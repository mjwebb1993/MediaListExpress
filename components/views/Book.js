import html from "html-literal";

export default st => html`
  <h2>List of All Books:</h2>
  <table id="media">
    <thead>
      <tr>
        <th>Name</th>
        <th>Genre</th>
        <th>Year Released</th>
        <th>On Amazon</th>
      </tr>
    </thead>
    ${st.books
      .map(book => {
        return `<tr><td>${book.name}</td><td>${book.genre.join(
          " & "
        )}</td><td>${book.yearReleased}</td><td>Yes</td></tr>`;
      })
      .join("")}
  </table>
`;
