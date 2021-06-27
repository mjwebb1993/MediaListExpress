import html from "html-literal";

export default st => html`
<section id="home">
  <div class="intro-paragraph">
    <h3>Media List Express Introduction</h3>
      <p>Welcome to Media List Express! This application will allow you to organize the content that you want to watch while never having to guess if you've already seen it!</p>

      <p>Have you ever lost track of what season you were on? Missed a game you wanted to play? Those will be question of the past with these set of features:</p>
        <ul class="feature list">
          <li>View an extensive catalog of Movies, Games and Books</li>
            <li>Separate between the three media categories to narrow your search</li>
            <li>Create two lists: one of your past viewing, and one for what you want to view later</li>
        </ul>
      <p>Below you will be able to log in, register, and see an example of our extensive catalog. Enjoy!</p>
  </div>
  <div class="flex-container">
    <div class="flex-child red">
      <h3>User Login</h3>
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Enter Username...">
        </div>

        <div>
          <label for="pass">Password (8 characters minimum):</label>
          <input type="password" id="pass" name="password" placeholder="Enter Password..."
                minlength="8" required>
        </div>
        <input type="submit" value="Sign in">
        <div class="register-home">
        Not a user? Register here!
        </div>
    </div>

    <div class="flex-child blue">
      <h3>Revolving List of Different Parts of Catalog</h3>
        <p>a list of random catalog items will be displayed here</p>
    </div>
    </div>
  </div>
</section>`;
