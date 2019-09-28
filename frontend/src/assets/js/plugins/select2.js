(function ($) {
	"use strict";

  var data = [
      {
          id: 0,
          text: 'enhancement'
      },
      {
          id: 1,
          text: 'bug'
      },
      {
          id: 2,
          text: 'duplicate'
      },
      {
          id: 3,
          text: 'invalid'
      },
      {
          id: 4,
          text: 'wontfix'
      }
  ];

  function formatRepo (repo) {
    if (repo.loading) {
      return repo.text;
    }

    var markup = "<div class='d-flex'>" +
      "<div class='w-40 no-shrink mr-3'><img class='w-100' src='" + repo.owner.avatar_url + "' /></div>" +
      "<div class=''>" +
        "<div class='mb-1'>" + repo.full_name + "</div>";

    if (repo.description) {
      markup += "<small class='text-muted h-1x mb-1'>" + repo.description + "</small>";
    }

    markup += "<small class='text-muted'>" +
      "<i class='fa fa-flash'></i> " + repo.forks_count + " Forks" +
      "<i class='fa fa-star ml-2'></i> " + repo.stargazers_count + " Stars" +
      "<i class='fa fa-eye ml-2'></i> " + repo.watchers_count + " Watchers" +
    "</small>" +
    "</div></div>";

    return markup;
  }

  function formatRepoSelection (repo) {
    return repo.full_name || repo.text;
  }

  var init = function(){
    $('#select2-single').select2();
    $('#select2-multiple').select2();
    $('#select2-data').select2({ data: data });
    $('#select2-ajax').select2({
      ajax: {
        url: 'https://api.github.com/search/repositories',
        dataType: 'json',
        delay: 250,
        data: function (params) {
          return {
            q: params.term,
            page: params.page
          };
        },
        processResults: function (data, params) {
          params.page = params.page || 1;
          return {
            results: data.items,
            pagination: {
              more: (params.page * 30) < data.total_count
            }
          };
        },
        cache: true
      },
      escapeMarkup: function (markup) { return markup; },
      minimumInputLength: 1,
      templateResult: formatRepo,
      templateSelection: formatRepoSelection
    });
  }

  // for ajax to init again
  $.fn.select2.init = init;

})(jQuery);
