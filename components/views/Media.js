import html from "html-literal";

export default st => html`
  This is the Media WIP page! This is a test!
  <section id="media">
    ${st.lists.map(list => {
      return formatMediaEntry(list);
    })}
  </section>
`;

function formatMediaEntry(list) {
  return `
    <div class="intro-paragraph">
      <h4>List of Games: ${list[0].name}</h4>
    </div>
  `;
}
