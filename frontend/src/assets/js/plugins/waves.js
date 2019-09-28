window.waves = {};

(function ($, waves) {
	"use strict";

  var init = function(){
    
    Waves.attach('.btn');
    Waves.attach('.app-aside .nav a');
    Waves.init();

  }

  // for ajax to init again
  waves.init = init;

})(jQuery, window.waves);
