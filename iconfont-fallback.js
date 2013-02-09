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
        defaults = {},
        settings = $.extend({}, defaults, options);

    $('#ua').text(navigator.userAgent);

    return $target;
  };

}(jQuery));
