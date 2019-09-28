(function ($) {
	"use strict";

    function detailFormatter(index, row) {
        var html = [];
        $.each(row, function (key, value) {
            html.push('<p><b>' + key + ':</b> ' + value + '</p>');
        });
        return html.join('');
    }

    function operateFormatter(value, row, index) {
        return [
            '<a class="remove" href="javascript:void(0)" title="Remove">',
            '<i class="fa fa-trash"></i>',
            '</a>'
        ].join('');
    }

    function textFormatter(data) {
        return '<strong>'+data+'</strong>';
    }

    function getIdSelections($table) {
        return $.map($table.bootstrapTable('getSelections'), function (row) {
            return row.name
        });
    }

    var init = function(){
        var $table = $('#table'),
        $remove = $('#remove'),
        selections = [];

        $table.bootstrapTable({
            columns: [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        valign: 'middle'
                    }, 
                    {
                        title: 'People',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: textFormatter
                    },
                    {
                        title: 'Detail',
                        colspan: 5,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'hr.position',
                        title: 'Position',
                        sortable: true
                    },
                    {
                        field: 'contact.0',
                        title: 'Office',
                        sortable: true
                    },
                    {
                        field: 'contact.1',
                        title: 'Extn.',
                        sortable: true
                    },
                    {
                        field: 'hr.salary',
                        title: 'Salary',
                        sortable: true
                    },
                    {
                        field: 'operate',
                        title: '',
                        align: 'center',
                        formatter: operateFormatter
                    }
                ]
            ]
        });

        $table.on('check.bs.table uncheck.bs.table ' +
                'check-all.bs.table uncheck-all.bs.table', function () {
            $remove.prop('disabled', !$table.bootstrapTable('getSelections').length);
            // save your data, here just save the current page
            selections = getIdSelections($table);
            // push or splice the selections if you want to save all data selections
        });

        $table.on('expand-row.bs.table', function (e, index, row, $detail) {
            if (index % 2 == 1) {
                $detail.html('Loading from ajax request...');
                $.get('LICENSE', function (res) {
                    $detail.html(res.replace(/\n/g, '<br>'));
                });
            }
        });

        $table.on('all.bs.table', function (e, name, args) {
            //console.log(name, args);
        });

        $remove.click(function () {
            var ids = getIdSelections($table);
            $table.bootstrapTable('remove', {
                field: 'name',
                values: ids
            });
            $remove.prop('disabled', true);
        });

  }

  // for ajax to init again
  $.fn.bootstrapTable.init = init;

})(jQuery);
