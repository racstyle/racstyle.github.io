<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Home!</title>
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
          <header><h1>So hello there!</h1></header>
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
