import html from "html-literal";

export default st => html`
<section id="home">
  <div class="intro-paragraph">
    <h3>The Introduction Paragraph to Application</h3>
      <p>Welcome to "Insert Capstone Project Name Here. This application will allow you to organize the content that you want to watch while never having to guess if you've already seen it!</p>

      <p>Have you ever lost track of what season you were on? Missed a game you wanted to play? Those will be question of the past with these set of features:</p>
        <ul class="feature list">
          <li>Feature One</li>
            <li>Feature Two</li>
            <li>Feature Three</li>
        </ul>
      <p>Below you will be able to log in, register, and see an example of our extensive catalog. Enjoy!</p>
  </div>
  <div class="flex-container">
    <div class="flex-child red">
      <h3>User Preview</h3>
        <p>this is where a preview will be implemented</p>
    </div>
    <div class="flex-child blue">
      <h3>Revolving List of Different Parts of Catalog</h3>
        <p>a list of random catalog items will be displayed here</p>
    </div>
    </div>
  </div>
</section>`;
