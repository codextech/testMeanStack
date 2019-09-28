(function ($) {
	"use strict";

  var init = function(){
    
    $('#datetimepicker1').datetimepicker();
    $('#datetimepicker2').datetimepicker();
    $('#datetimepicker3').datetimepicker({locale: 'ru'});
    $('#datetimepicker4').datetimepicker({format: 'L'});
    $('#datetimepicker5').datetimepicker({format: 'LT'});
    $('#datetimepicker6').datetimepicker({
      disabledDates: [
          moment().add(1,'d'), moment().add(-1,'d')
      ]
    });
    $('#datetimepicker7').datetimepicker({
      daysOfWeekDisabled: [0, 6]
    });
    $('#datetimepicker8').datetimepicker({
      viewMode: 'years'
    });
    
    $('#datetimepicker9').datetimepicker();
    $('#datetimepicker10').datetimepicker({
        useCurrent: false
    });
    $("#datetimepicker9").on("change.datetimepicker", function (e) {
        $('#datetimepicker10').datetimepicker('minDate', e.date);
    });
    $("#datetimepicker10").on("change.datetimepicker", function (e) {
        $('#datetimepicker9').datetimepicker('maxDate', e.date);
    });

    $('#datetimepicker11').datetimepicker({
      format: 'DD/MM/YYYY',
      inline: true,
      sideBySide: true
    });

  }

  // for ajax to init again
  $.fn.datetimepicker.init = init;

})(jQuery);
