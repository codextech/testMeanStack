(function ($) {
	'use strict';
    
    var TRANSITION_DURATION = 600;

    $(document).on('pjax:send', function() {
      $(document).trigger('pjaxSend');
    });

    $(document).on('pjaxSend', function(){
      // close the aside on mobile
      $('#aside').modal('hide');
      $('body').removeClass('modal-open').find('.modal-backdrop').remove();
      // remove the tags created by plugins
      $('.jqvmap-label, .note-popover, .dz-hidden-input').remove();
    });

    $(document).on('refresh', function() {
      main_pjax && main_pjax.refresh();
      sub_pjax && sub_pjax.refresh();
    });
    
    $(document).on('pjax:success', function() {
      if(bootstrap && bootstrap.Util){
        $(document).one(bootstrap.Util.TRANSITION_END, function(){
          $('.js-Pjax-onswitch').removeClass('js-Pjax-onswitch');
          $(document).trigger('pjaxEnd');
        }).emulateTransitionEnd(TRANSITION_DURATION);
      }else{
        $(document).trigger('pjaxEnd');
      }
    });

    if( app.setting.ajax ){
      var switch_h_option = {
        classNames: {
          // class added on the element that will be removed
          remove: 'animate animate-reverse animate-fast animate-no-delay',
          // class added on the element that will be added
          add: 'animate',
          // class added on the element when it go backward
          backward: 'fadeInRight',
          // class added on the element when it go forward (used for new page too)
          forward: 'fadeInLeft'
        },
        callbacks: {
          addElement: function(el){
            $(el).parent().addClass('js-Pjax-onswitch');
          },
          removeElement: function(el) {
            $(el).css( 'width', $(el).parent().width() );
          }
        }
      };

      var main_pjax = new Pjax({
        cacheBust: false,
        elements: '#aside a:not(.no-ajax), #content-header a, #nav a, .app-header a',
        selectors: ['title', '#content-header', '#content-footer', '#content-main'],
        switches: {
          '#content-main': Pjax.switches.sideBySide
        },
        switchesOptions: {
          '#content-main': switch_h_option
        }
      });

      var sub_pjax = new Pjax({
        cacheBust: false,
        elements: '#content-aside a, #content-body a',
        selectors: ['#content-body'],
        switches: {
          '#content-body': Pjax.switches.sideBySide
        },
        switchesOptions: {
          '#content-body': switch_h_option
        }
      });

    }

})(jQuery);
