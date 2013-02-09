/**
 * Iconfont Fallback
 * Author & copyright (c) 2012: John Polacek
 * Dual MIT & GPL license
 *
 * Page: http://dfcb.github.com/iconfont-fallback
 * Repo: https://github.com/dfcb/iconfont-fallback
 *
 * The jQuery plugin for replacing icon fonts with png files for browsers that don’t support webfonts.
 *
 */
;(function($) {

  $.fn.iconfontFallback = function(options) {
    var $target = this,
        defaults = {iconDir:'img/icons'},
        settings = $.extend({}, defaults, options);

    $('#ua').text(navigator.userAgent);

    $target
		.css('font-size',0)
		.each(function() {
			var iconClass = $(this).attr('class');
			var iconName = iconClass.substr(iconClass.indexOf('icon-')+5) +'.png';
			// remove hyphens
			var hyphens = new RegExp("\-", "g");
			iconName = iconName.replace(hyphens,'');
			$(this)
				.html('<img src="'+settings.iconDir+'/'+iconName+'" />')
				.addClass('icon-fallback');
		});

    return $target;
  };

}(jQuery));
