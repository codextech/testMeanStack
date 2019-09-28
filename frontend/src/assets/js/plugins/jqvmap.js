(function ($) {
	"use strict";

  var init = function(){
    
    // world map
    $('#jqvmap-world').each(function(){
      var $that = $(this);
      $.ajax('../assets/api/worldmap.json').done(function(data){
        $that.vectorMap(
          {
            map: 'world_en',
            backgroundColor: 'transparent',
            borderColor: '#ffffff',
            borderWidth: 0.25,
            borderOpacity: 0.25,
            values: data,
            color: 'rgba(120,130,140,0.2)',
            colors: {
              usa: app.color.primary,
              cn: app.color.accent,
              au: app.color.warn
            }
          }
        );
      });
    })

    // usa map
    $('#jqvmap-usa').each(function(){
      $(this).vectorMap(
        {
          map: 'usa_en',
          backgroundColor: 'transparent',
          borderColor: '#ffffff',
          borderWidth: 0.25,
          borderOpacity: 0.25,
          color: hexToRGB(app.color.primary, 0.3),
          colors: {
              ca: app.color.primary,
              fl: app.color.accent,
              ny: app.color.warn,
              mo: hexToRGB(app.color.primary, 0.5),
              or: hexToRGB(app.color.warn, 0.5)
          }
        }
      );
    });

    // france map
    $('#jqvmap-france').each(function(){
      $('#jqvmap-france').vectorMap(
        {
          map: 'france_fr',
          backgroundColor: 'transparent',
          borderColor: '#ffffff',
          borderWidth: 1,
          borderOpacity: 0.25,
          color: hexToRGB(app.color.primary, 0.3),
          colors: {
              'fr-18': app.color.primary,
              'fr-2b': app.color.accent
          }
        }
      );
    });

  }

  // for ajax to init again
  $.fn.vectorMap.init = init;

})(jQuery);
