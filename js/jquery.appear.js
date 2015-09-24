/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.6
 */
(function($) {
  var selectors = [];

  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false
  };
  var $window = $(window);

  var $prior_appeared = [];

  function process() {
    check_lock = false;
    for (var index = 0, selectorsLength = selectors.length; index < selectorsLength; index++) {
      var $appeared = $(selectors[index]).filter(function() {
        return $(this).is(':appeared');
      });

      $appeared.trigger('appear', [$appeared]);

      if ($prior_appeared[index]) {
        var $disappeared = $prior_appeared[index].not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared[index] = $appeared;
    }
  };

  function add_selector(selector) {
    selectors.push(selector);
    $prior_appeared.push();
  }

  // "appeared" custom filter
  $.expr[':']['appeared'] = function(element) {
    var $element = $(element);
    if (!$element.is(':visible')) {
      return false;
    }

    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;

    if (top + $element.height() >= window_top &&
        top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
        left + $element.width() >= window_left &&
        left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  };

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function() {
          if (check_lock) {
            return;
          }
          check_lock = true;

          setTimeout(process, opts.interval);
        };

        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      add_selector(selector);
      return $(selector);
    }
  });

  $.extend({
    // force elements's appearance check
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      }
      return false;
    }
  });
})(function() {
  if (typeof module !== 'undefined') {
    // Node
    return require('jquery');
  } else {
    return jQuery;
  }
}());


// This is a total revamp of original jquery.appear plugin hosted on http://code.google.com/p/jquery-appear/

// Check demo page!

// This plugin can be used to prevent unnecessary processeing for content that is hidden or is outside of the browser viewport.

// It implements a custom appear/disappear events which are fired when an element became visible/invisible in the browser viewport.

//     $('someselector').appear(); // It supports optional hash with "force_process" and "interval" keys. Check source code for details.

//     $('<div>test</div>').appear(); // It also supports raw DOM nodes wrapped in jQuery.

//     $('someselector').on('appear', function(event, $all_appeared_elements) {
//       // this element is now inside browser viewport
//     });
//     $('someselector').on('disappear', function(event, $all_disappeared_elements) {
//       // this element is now outside browser viewport
//     });
// If you want to fire appear event for elements which are close to vieport but are not visible yet, you may add data attributes appear-top-offset and appear-left-offset to DOM nodes.

//     <div class="postloader" data-appear-top-offset="600">...</div> # appear will be fired when an element is below browser viewport for 600 or less pixels
// Appear check can be forced by calling $.force_appear(). This is suitable in cases when page is in initial state (not scrolled and not resized) and when you want manually trigger appearance check.

// Also this plugin provides custom jQuery filter for manual checking element appearance.

//     $('someselector').is(':appeared')