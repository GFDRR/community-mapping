(function() {

  document.onready = function() {

    var images = document.querySelectorAll('.content img'),
      body = document.querySelector('body');

    var opts = {
      afterClose: function() {
        body.className = '';
      }
    }

    var triggerLightbox = function() {
      $.featherlight($(this), opts);
      body.className = '-no-scroll';
    };

    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('click',triggerLightbox);
    }
  };

})();
