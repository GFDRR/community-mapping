(function() {

  document.onready = function() {

    // Language selector
    var select = document.querySelector('#language-selector');
    var onChange = function(e) {
      var language = e.currentTarget.value,
        site;

      switch(language) {
        case 'en':
          site = '/community-mapping/';
        break;

        case 'fr':
          site = '/community-mapping/fr/';
        break;
      }


      if (site) {
        window.location.href = site;
      }

    };

    select.addEventListener('change', onChange);


    // Lightbox
    var images = document.querySelectorAll('.content img'),
      body = document.querySelector('body');

    var opts = {
      afterClose: function() {
        body.className = '';
      }
    }

    var triggerLightbox = function() {
      $.featherlight($(this), opts);
      body.className += ' -no-scroll';
    };

    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('click',triggerLightbox);
    }

  }

})();
