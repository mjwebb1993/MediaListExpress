import html from "html-literal";

export default st => html`
  <header>
    <div id="headerTitle">
      <h2>MEDIA LIST EXPRESS</h2>
      <h3>An app that allows you to keep track of your favorites and more!</h3>
    </div>
    <h3>You are currently on the ${st.view} page</h3>
  </header>
`;

// <!-- <a href="">"Call to Action" "Button"</a> --> above line 3
