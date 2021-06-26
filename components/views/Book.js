import html from "html-literal";

export default st => html`
  This is the Media WIP page! This is a test!
  <table id="media">
    <tr>
      <th>Name</th>
      <th>Genre</th>
      <th>Year Released</th>
      <th>On Amazon</th>
    </tr>
    ${st.books
      .map(book => {
        return `<tr><td>${book.name}</td><td>${book.genre.join(
          " & "
        )}</td><td>${book.yearReleased}</td><td>Yes</td></tr>`;
      })
      .join("")}
  </table>
`;
