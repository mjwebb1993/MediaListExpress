import html from "html-literal";

export default st => html`
  <div id="media-page">
    <h2>User Future List:</h2>
  </div>
  <section id="game-page">
    <div class="game-flex">
      <h3>Movie Name: ${st.futureList.name}</h3>
      <img src=${st.futureList.picUrl} />
      <h4>Movie Info</h4>
      <h5>
        Genre: ${st.futureList.genre}<br />
        Released: ${st.futureList.yearReleased}<br />
      </h5>
    </div>
  </section>
`;

// function formatMovie(list) {
//   return `
//     <div class="game-flex">
//     <h3>Movie Name: ${list[0]}</h3>
//     <img src=${list[4]}>
//     <h4>Movie Info</h4>
//     <h5>Genre: ${list[1]}<br>
//     Released: ${list[2]}<br>
//     Studio: ${list[3]}</h5>
//     </div>
//   `;
// }

{
  /* <section id="game-page">
${st.futureList
  .map(list => {
    return formatMovie(list);
  })
  .join("")}
</section> */
}
