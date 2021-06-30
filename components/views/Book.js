import html from "html-literal";

export default st => html`
  <div id="media-page">
    <h2>List of All Books:</h2>
  </div>
  <section id="game-page">
    ${st.books
      .map(book => {
        return formatBook(book);
      })
      .join("")}
  </section>
`;

function formatBook(book) {
  return `
    <div class="game-flex">
    <h3>Book Name: ${book.name}</h3>
    <img src=${book.picUrl}>
    <h4>Book Info</h4>
    <h5>Genre: ${book.genre.join(" & ")}<br>
    Released: ${book.yearReleased}<br>
    Consoles: ${book.author}</h5>
    <input id="selectButton" type="button" value="select">
    </div>
  `;
}
// export default st => html`
//   <h2>List of All Books:</h2>
//   <table id="media">
//     <thead>
//       <tr>
//         <th>Name</th>
//         <th>Genre</th>
//         <th>Year Released</th>
//         <th>On Amazon</th>
//       </tr>
//     </thead>
//     ${st.books
//       .map(book => {
//         return `<tr><td>${book.name}</td><td>${book.genre.join(
//           " & "
//         )}</td><td>${book.yearReleased}</td><td>Yes</td></tr>`;
//       })
//       .join("")}
//   </table>
// `;
