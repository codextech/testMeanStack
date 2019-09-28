(function ($) {
	"use strict";

  var popover,
  option = {
    header: {
      left: 'prev',
      center: 'title',
      right: 'next'
    },
    defaultDate: moment().format('YYYY-MM-DD'),
    editable: true,
    eventLimit: false,
    eventRender: function(event, element, view) {
      if(event.status){
        $(element).find('.fc-content').prepend('<span class="badge badge-xs mr-1 '+event.status+'"></span>');
      }
    },
    eventClick: function(event, jsEvent) {
      var that = $(jsEvent.target);
      var el = that.is('.fc-event') ? that : that.closest('.fc-event');
      
      var event_date = '<div><i class="fa fa-fw fa-calendar-o text-muted"></i> '+moment(event.start).format("dddd D")+'</div>';
      var event_time = '<div><i class="fa fa-fw fa-clock-o text-muted"></i> '+moment(event.start).format("h:mma")+ (event.end ? ' - '+moment(event.end).format("h:mma") : '' )+'</div>';
      var participant = ''
      $.each(event.participant, function (index, value) {
        participant += '<a href="profile.html" class="avatar w-24 mr-1"><img src="../assets/images/a'+value+'.jpg"></a>';
      });
      // switch to another popover
      if($(el).data('bs.popover')){
        $(el).popover('toggle');
        return;
      }
      popover && popover.popover('dispose');
      popover = $(el).popover({
          id: event._id,
          title: event.title,
          content: event_date + event_time + '<div class="d-flex my-2">' + participant + '</div>' + '<div class="text-muted mb-2">'+event.description+'</div>',
          html: true,
          container: '#fullcalendar',
          trigger: 'focus'
      });
      popover.popover('show');
    }
  };

  $(document).on('click', '#dayview', function() {
    popover && popover.popover('dispose');
    $('#fullcalendar').fullCalendar('changeView', 'agendaDay')
  });

  $(document).on('click', '#weekview', function() {
    popover && popover.popover('dispose');
    $('#fullcalendar').fullCalendar('changeView', 'agendaWeek')
  });

  $(document).on('click', '#monthview', function() {
    popover && popover.popover('dispose');
    $('#fullcalendar').fullCalendar('changeView', 'month')
  });

  $(document).on('click', '#todayview', function() {
    popover && popover.popover('dispose');
    $('#fullcalendar').fullCalendar('today')
  });

  var init = function(){
    $.ajax('api/fullcalendar.json').done(function(data){
      $.each(data, function(index,item){
        item.start = moment().add(Math.floor((Math.random() * 15) + 1) - index,'d').add(index*3,'h');
        if(index == 0){
          item.end = moment(item.start).add(1, 'd');
        }
        if(index == 6){
          item.end = moment(item.start).add(2, 'd');
        }
      });
      option.events = data;
      $('#fullcalendar').fullCalendar(option);
    });

  }

  // for ajax to init again
  $.fn.fullCalendar.init = init;

})(jQuery);
