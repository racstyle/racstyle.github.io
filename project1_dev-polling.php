<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DEV project 1 - polling</title>
    <link rel="stylesheet" href="css/app.css">
    <script>
      function getVote(intn) {
        var xmlhttp=new XMLHttpRequest();
        
        xmlhttp.onreadystatechange = function() {
          if (this.readyState==4 && this.status==200) {
            document.getElementById("poll").innerHTML = this.responseText;
          }
        }

        xmlhttp.open("GET", "project1_dev-poll_vote.php?vote=" + intn,true);
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
          <header><h1>Simple polling via PHP</h1></header>
        </div>
      </div>

      <!-- Content -->
      <div class="grid-x">
        <div class="large-12 cell">
          <div class="callout">
            <p>I am attempting to create a simple polling I can also use in the homepage.  Feel free to vote what you think!</p>
          </div>
        </div>

        <div id="poll">
          <h3>Is this poll cool enough?</h3>
          <form>
            Yeah! <input type="radio" name="vote" value="0" onclick="getVote(this.value)"><br>
            Nah <input type="radio" name="vote" value="1" onclick="getVote(this.value)">
          </form>
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
