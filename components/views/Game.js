import html from "html-literal";

export default st => html`
  This is the Media WIP page! This is a test!
  <section id="game">
    ${st.games
      .map(game => {
        return formatMediaEntry(game);
      })
      .join("")}
  </section>
`;

function formatMediaEntry(game) {
  return `
    <div class="intro-paragraph">
      <p>${game.name} was released in ${game.yearReleased} and has the following tags: ${game.genre}</p>
    </div>
  `;
}
