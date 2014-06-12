(function(bespoke) {
  
  'use strict';
  
  bespoke.plugins.fullscreenbackground = function(deck) {

    deck.on('activate', function(e) {
      var index = e.index;
      var slide = e.slide;
      var deckParent = deck.parent;
      var background = slide.getAttribute('data-bespoke-fullscreenbackground');

      if(background) {
        deckParent.classList.add('cover');
        deckParent.style.backgroundImage = 'url(' + background + ')';
      } else {
        deckParent.classList.remove('cover');
        deckParent.style.backgroundImage = null;
      }

    });
  };

}(bespoke));
