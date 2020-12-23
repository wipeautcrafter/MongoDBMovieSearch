<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Film Zoekmachine</title>
    <link rel="stylesheet" href="style.css">

    <!-- Materialize + JQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    <script src="script.js"></script>
  </head>
  <body>
    <!-- zoekveld -->
    <div class="input-field">
      <input id="movie_search" type="text" class="validate">
      <label for="movie_search">Naam Film</label>
    </div>

    <!-- resultatenlijst -->
    <div id="movies"></div>

    <!-- modal -->
    <div id="modal" class="modal modal-fixed-footer">
      <div class="modal-content" id="modal_content"></div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Sluit</a>
      </div>
    </div>
  </body>
</html>
