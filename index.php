<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Home!</title>
    <link rel="stylesheet" href="css/app.css">

    <script>
      function getVote(intn) {
        var xmlhttp=new XMLHttpRequest();
        
        xmlhttp.onreadystatechange = function() {
          if (this.readyState==4 && this.status==200) {
            document.getElementById("poll").innerHTML = this.responseText;
          }
        }

        xmlhttp.open("GET", "index_PollOfTheDay.php?vote=" + intn,true);
        xmlhttp.send();
      }
    </script>
  </head>
  <body>
    <div class="grid-container">
      <!-- Menu bar -->
      <div class="grid-x">
        <div class="large-12 cell">
          <nav><?php include 'nav.html'; ?></nav>
        </div>
      </div>

      <!-- Main header -->
      <div class="grid-x">
        <div class="large-12 cell">
          <header><h1>Why hello there!</h1></header>
        </div>
      </div>

      <!-- Content -->
      <div class="grid-x">
        <div class="large-12 cell">
          <div class="callout">
            <p>Hi!  This is where you will find what craziness I am up to!</p>
            <p>Right now, it's a barebones mess but stay tuned for some updates, both good and bad! 😅</p>
            <p>Hey!  This portion uses PHP!  Today's date is: <?php echo date('Y/m/d') . ", " . "hello there!"; ?></p>
          </div>

          <div class="orbit" role="region" aria-label="Favorite Text Ever" data-orbit>
            <ul class="orbit-container">
              <button class="orbit-previous" aria-label="previous"><span class="show-for-sr">Previous Slide</span>&#9664;</button>
              <button class="orbit-next" aria-label="next"><span class="show-for-sr">Next Slide</span>&#9654;</button>
              <li class="is-active orbit-slide">
                <div class="docs-example-orbit-slide">
                  <h3>Poll of the Day:</h3>
                  <div id="poll">
                    <h4>Should I create a dedicated social media account for this page?</h4>
                    <form>
                      Yeah! <input type="radio" name="vote" value="0" onclick="getVote(this.value)"><br>
                      Nah <input type="radio" name="vote" value="1" onclick="getVote(this.value)">
                    </form>
                  </div>
                </div>
              </li>
              <li class="orbit-slide">
                <div class="docs-example-orbit-slide">
                  <p><strong>This is rebeccapurple.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </li>
              <li class="orbit-slide">
                <div class="docs-example-orbit-slide">
                  <p><strong>This is darkgoldenrod.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </li>
            </ul>
            <nav class="orbit-bullets">
              <button class="is-active" data-slide="0">
                <span class="show-for-sr">First slide details.</span>
                <span class="show-for-sr" data-slide-active-label>Current Slide</span>
              </button>
              <button data-slide="1"><span class="show-for-sr">Second slide details.</span></button>
              <button data-slide="2"><span class="show-for-sr">Third slide details.</span></button>
            </nav>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="grid-x">
        <div class="large-12 cell">
          <footer><?php include 'foot.html'; ?></footer>
        </div>
      </div>
    </div>

    <script src="node_modules/jquery/dist/jquery.js"></script>
    <script src="node_modules/what-input/dist/what-input.js"></script>
    <script src="node_modules/foundation-sites/dist/js/foundation.js"></script>
    <script src="js/app-min.js"></script>
  </body>
</html>
