(function ($) {
  'use strict';
  Drupal.behaviors.agegate = {
    attach: function (context, settings) {
      if ( Drupal.settings.agegate.displaypopup === 1 ) {
        startAgegate (context, settings);
      }

      /**
      * AgeGate function
      */
      function startAgegate (context, setting) {

        // Settings brought in from drupal config.
        var VERIFICATIONTYPE = Drupal.settings.agegate.verifcationtype;
        var TPLHTML = Drupal.settings.agegate.popuphtml;
        var COOKIE_DOMAIN = Drupal.settings.agegate.cookiedomain;
        var COOKIE_NAME = Drupal.settings.agegate.cookiename;
        var COOKIE_FORMAT = Drupal.settings.agegate.cookieformat;
        var CANCEL_URL = Drupal.settings.agegate.cancelurl;
        var LEGALAGE = Drupal.settings.agegate.legalage;

        if (COOKIE_FORMAT === 1) {
          $.cookie.raw = true;
        }
        else {
          $.cookie.raw = false;
        }

        var cookie_options = {
          expires: 1,
          path: '/',
          domain : COOKIE_DOMAIN
        }

        var agegateHtmlWrapper = '<div id="agegate" style="display: block"><div class="agegate-message">' + TPLHTML + '</div></div>';
        var cookieValue = '{"ROWCOUNT": 1, "COLUMNS": ["ISLEGAL", "REDIRECTURL"], "DATA":{"ISLEGAL": ["1"], "REDIRECTURL": ["' + CANCEL_URL + '"]}}';

        // Check for presence of the cookie, if none, append the HTML file.
        if ($.cookie (COOKIE_NAME) == null) {
          $('body').append (agegateHtmlWrapper);
        }

        // Register event listener for age gate submit button.
        $('#agegate_verify').click (function () {
          if ( validate () === true ) {
            $.cookie (COOKIE_NAME, cookieValue, cookie_options);
            $('#agegate').css ('display', 'none');
          }
        });

        // Register event listener for age gate cancel button.
        $('#agegate_cancel').click (function () {
          window.location = CANCEL_URL;
        });

        // Age Validation Logic.
        function validate () {
          if (VERIFICATIONTYPE == 1) {
            var cutoff = new Date ();
            cutoff.setFullYear (cutoff.getFullYear () - LEGALAGE );
            var birthday = new Date ( $('#agegate_birthday').val () );
            var result = cutoff - birthday;
            if (result > 0) {
              return true;
            }
            else {
              return false;
            }
          }
          else if (VERIFICATIONTYPE == 2) {
            return true;
          }
        }
      }
    }
  }
})(jQuery);
