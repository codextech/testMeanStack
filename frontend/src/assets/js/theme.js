(function ($) {
	'use strict';

	  window.app = {
      color: {
        primary: '#2499ee',
        accent: '#6284f3',
        warn: '#907eec'
      },
      setting: {
        ajax: true,
        folded: false,
        container: false,
        theme: 'primary',
        aside: 'dark',
        brand: 'dark',
        header: 'white',
        fixedContent: false,
        fixedAside: false,
        bg: ''
      }
    };

    window.hexToRGB = function(hex, alpha) {
      var r = parseInt(hex.slice(1, 3), 16),
          g = parseInt(hex.slice(3, 5), 16),
          b = parseInt(hex.slice(5, 7), 16);
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    }

    var namespace = app.color.primary+'-setting',
        theme;
    
    if( ! store(namespace) ){
      store(namespace, app.setting);
    }else{
      app.setting = store(namespace);
    }

    var v = window.location.search.substring(1).split('&');

    for (var i = 0; i < v.length; i++){
        var n = v[i].split('=');
        app.setting[n[0]] = (n[1] == "true" || n[1]== "false") ? (n[1] == "true") : n[1];
        store(namespace, app.setting);
    }

    $(document).on('click.setting', '.setting input', function(e){
      var $this = $(this),
          $attr = $this.attr('name');
      app.setting[$attr] = $this.is(':checkbox') ? $this.prop('checked') : $(this).val();
      store(namespace, app.setting);
      setTheme(app.setting);
      $attr == 'ajax' && location.reload();
    });

    setTheme();

    // init
    function setTheme(){
      var that = $('.setting');
      // bg
      $('body').removeClass($('body').attr('ui-class')).addClass(app.setting.bg).attr('ui-class', app.setting.bg);
      // folded
      app.setting.folded ? $('#aside').addClass('folded') : $('#aside').removeClass('folded');
      // container
      app.setting.container ? $('body').addClass('container') : $('body').removeClass('container');
      // aside
      $('#aside, #aside .sidenav').removeClass($('#aside .sidenav').attr('ui-class')).addClass(app.setting.aside).attr('ui-class', app.setting.aside);
      // brand
      $('#aside .navbar').removeClass($('#aside .navbar').attr('ui-class')).addClass(app.setting.brand).attr('ui-class', app.setting.brand);
      // fixed header
      app.setting.fixedContent ? $('body').addClass('fixed-content') : $('body').removeClass('fixed-content');
      // fixed aside
      app.setting.fixedAside ? $('body').addClass('fixed-aside') : $('body').removeClass('fixed-aside');

      that.find('input[name="folded"]').prop('checked', app.setting.folded);
      that.find('input[name="fixedContent"]').prop('checked', app.setting.fixedContent);
      that.find('input[name="fixedAside"]').prop('checked', app.setting.fixedAside);
      that.find('input[name="container"]').prop('checked', app.setting.container);
      that.find('input[name="ajax"]').prop('checked', app.setting.ajax);

      that.find('input[name="theme"][value="'+app.setting.theme+'"]').prop('checked', true);
      that.find('input[name="bg"][value="'+app.setting.bg+'"]').prop('checked', true);
      that.find('input[name="aside"][value="'+app.setting.aside+'"]').prop('checked', true);
      that.find('input[name="brand"][value="'+app.setting.brand+'"]').prop('checked', true);
      
      if(theme != app.setting.theme){
        lazyload.load('../assets/css/theme/'+app.setting.theme+'.css').then(function(){
          lazyload.unload('../assets/css/theme/'+theme+'.css');
          theme = app.setting.theme;
        });
      }
    }

    // save setting to localstorage
    function store(namespace, data) {
      try{
        if (arguments.length > 1) {
          return localStorage.setItem(namespace, JSON.stringify(data));
        } else {
          var store = localStorage.getItem(namespace);
          return (store && JSON.parse(store)) || false;
        }
      }catch(err){
        
      }
    }

})(jQuery);
