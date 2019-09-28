(function ($) {
  "use strict";
  
  $(document).on('click', '[data-nav] a', function (e) {
    var $this = $(this), $active, $li, $li_li;

    $li = $this.parent();
    $li_li = $li.parents('li');

    $active = $li.closest( "[data-nav]" ).find('.active');

    $li_li.addClass('active');
    ( $this.next().is('ul') && $li.toggleClass('active') ) || $li.addClass('active');
    
    $active.not($li_li).not($li).removeClass('active');

    if($this.attr('href') && $this.attr('href') !=''){
      $(document).trigger('Nav:changed');
    }
  });

  // init the active class when page reload
  function init(){
    var url = window.location.pathname.split( '/' );
    if(url.length > 0) url = url[url.length - 1];
    $('#aside .active').removeClass('active');
    $('#aside a').filter( function() {
      return url == $(this).attr('href');
    }).parents('li').addClass( 'active' );
  }
  
  init();

  $(document).on('pjaxEnd', function(){
    init();
  });

})(jQuery);
