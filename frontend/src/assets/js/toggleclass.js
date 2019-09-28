(function ($) {
	"use strict";
	
    $(document).on('click', '[data-toggle-class]', function (e) {
        e.preventDefault();
        var $self = $(this);
        var attr = $self.attr('data-toggle-class');
        var target = $self.attr('data-toggle-class-target') || $self.attr('data-target');
		var classes = ( attr && attr.split(',')) || '',
			targets = (target && target.split(',')) || Array($self),
			key = 0;
		$.each(classes, function( index, value ) {
			var target = $( targets[(targets.length && key)] ),
                current = target.attr('data-class'),
                _class = classes[index];

            (current != _class) && target.removeClass( target.attr('data-class') );
			target.toggleClass(classes[index]);
			target.attr('data-class', _class);
			key ++;
		});
		$self.toggleClass('active');
    });
})(jQuery);
