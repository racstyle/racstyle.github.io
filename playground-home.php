<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>We can have fun too!</title>
    <link rel="stylesheet" href="https://unpkg.com/@coreui/icons/css/all.min.css">
    <link rel="stylesheet" href="css/app.css">
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
          <header><h1>Let's play!</h1></header>
        </div>
      </div>

      <!-- Content -->
      <div class="grid-x">
        <div class="large-12 cell">
          <div class="callout">
            <p>Let's have some fun, shall we?  I have 2 ways we can have fun: the dev way or the creative way.</p>
            <p>This is mainly for me to have fun utilizing my web dev and art skills (yes, engineers can be artists too!)</p>
            <p>Choose your poison, and don't forget to enjoy!</p>
          </div>
          <h4><a href="playground-dev.php">Fun DEV mode</a></h4>
          <h4><a href="playground-create.php">Fun Creative mode</a></h4>
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
