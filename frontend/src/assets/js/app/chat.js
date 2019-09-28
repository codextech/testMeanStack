window.chat = {};

(function ($, list) {
	"use strict";

  var nav_el = "#chat-nav"
      ,list_el = "#chat-list"
      ,filter = ""
      ,navlist
      ,list
      ,robotList = ['Hello', 'How can I help you', 'That sound great', 'Really?', 'Howdy']
      ,noticed = false
      ;

  $(document).on('click', '#chat-form #newBtn', function(e){
    create();
  });

  $(document).on('keypress', '#chat-form #newField', function(e){
    if(e.keyCode == 13){
      create();
    }
  });

  var timeout;

  function create(){
    var newField = $('#newField');
    if(newField.val() !== ''){
      list.add({
        msg: newField.val(),
        date: 'Just now',
        image: '../assets/images/a0.jpg',
        class: 'alt'
      });
      newField.val('');
    }
    gotoMsg();
    clearTimeout(timeout);
    timeout = setTimeout(robot, (Math.random() * robotList.length)*500 + 1000 );
  }

  function robot(){
    list.add({
        msg: robotList[Math.floor((Math.random() * robotList.length))],
        date: 'Just now',
        image: '../assets/images/a2.jpg',
        class: ''
    });
    gotoMsg();
  }

  function gotoMsg(){
    $('.scrollable', list_el).animate({ 
      scrollTop: $('.scrollable', list_el).prop("scrollHeight")
    }, 1000, 'easeInOutExpo');
  }

  var init = function(){
    $(document).trigger('refresh');
    
    // nav
    navlist = new List(nav_el.substr(1), {
        valueNames: [
          'item-title',
          'item-except'
        ]
    });

    // list
    list = new List(list_el.substr(1), {
      listClass: 'chat-list',
      item: 'chat-item',
      valueNames: [
        'msg',
        'date',
        { data: ['class']},
        { name: 'image', attr: 'src' }
      ]
    });

    if(!noticed){
      notie.alert({type:1, text: 'Try say something' });
      noticed = true;
    }

  }

  // for ajax to init again
  list.init = init;

})(jQuery, window.chat);
