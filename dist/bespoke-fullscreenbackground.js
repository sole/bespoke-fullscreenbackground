/*!
 * bespoke-fullscreenbackground v0.0.0
 * https://github.com/sole/bespoke-fullscreenbackground
 *
 * Copyright 2014, sole
 * This content is released under the MIT license
 */

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
