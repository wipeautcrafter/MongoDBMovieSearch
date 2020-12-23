// de timeout die voor het zoeken wordt gebruikt
let timeout = null;

// functie om de films uit de database te linken aan de IMDB site
function OpenIMDB(el) {
  // laat de "modal" popup zien
  M.Modal.getInstance($("#modal")).open();

  // laat een laadscherm zien totdat de film is opgehaald
  $("#modal_content").html(`
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
    `);

  // haal extra film-informatie op van het PHP-bestand
  $.getJSON(`search.php?title=${encodeURIComponent(el.innerHTML)}`, function(movies) {
    const movie = movies[0];

    // laat de poster zien
    $("#modal_content").html(`
      <img src="${movie.poster}" class="poster">
    `);
  });
}

// wordt uitgevoerd bij het volledig laden van de pagina
$(document).ready(function() {
  // initializeer de "modal" popup
  $(".modal").modal();

  // wanneer er invoer is op het "input" veld
  $("#movie_search").on("input", function() {
    clearTimeout(timeout);

    // stop als er minder dan 3 karakters is ingevoerd
    const val = $(this).val();
    if(val.length < 3) return;

    // als er meer dan 500ms niks is ingevoerd: zoek films uit MongoDB
    timeout = setTimeout(function() {
      // laat de laadbalk zien
      $("#movies").html(`
        <div class="progress">
          <div class="indeterminate"></div>
        </div>
        `);

      // gebruik JQuery om het PHP MongoDB-zoekbestand aan te roepen
      $.getJSON(`search.php?title=${encodeURIComponent(val)}`, function(res) {
        // voor debugging: gooi de output in de console
        console.log(res);

        // vul de lijst met de gevonden films uit de database
        if(res.length > 0) {
          $("#movies").html(`
            <ul class="collection">
            ${res.map(i => `
              <li class="collection-item">
                <a href="#" onclick="OpenIMDB(this)" data-tooltip="<b>${i.title} (${i.year})</b><br>${i.directors.join(", ")}">${i.title}</a>
              </li>`
            ).join("")}
            </div>
          `);

          $("#movies .collection-item a").tooltip();
        } else {
          // terugval als er geen films zijn gevonden
          $("#movies").html(`
            <ul class="collection">
              <li class="collection-item">Er zijn geen films gevonden.</li>
            </div>
          `);
        }
      });
    }, 800);
  });
});
