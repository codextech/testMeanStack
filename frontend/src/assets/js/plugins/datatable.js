(function ($) {
	"use strict";

  var colors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'blue-grey', 'grey'];
  
  var init = function(){
    $('#datatable').dataTable({
      ajax: '../assets/api/datatable.json',
      processing: true,
      columns: [
          { data: "name",
            render: function ( data, type, row ) {
              var name = data.split(" "), str="", i = Math.floor((Math.random() * 19));
              $(name).each(function(k, v){
                str += v.slice(0,1);
              });
              return "<span class='avatar text-sm w-32 d-inline-flex "+colors[i]+"'>"+str+"</span><span class='mx-3'>"+data+"</span>";
            }
          },
          { data: "hr.position" },
          { data: "contact.0" },
          { data: "contact.1" },
          { data: "hr.start_date" },
          { data: "hr.salary" }
      ]
    });
  }

  // for ajax to init again
  $.fn.dataTable.init = init;

})(jQuery);
