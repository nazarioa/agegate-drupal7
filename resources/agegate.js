/**
 * @file
 * This is the JS file at actually generates the age gate that gets displayed.
 *
 * The validate() function should be modified if there are new VERIFICTAION TYPES
 * declared. The function should return a boolean value.
 */

(function ($) {
  'use strict';
  Drupal.behaviors.agegate = {
    attach: function (context, settings) {
      if (Drupal.settings.agegate.displaypopup === 1) {
        startAgegate(context, settings);
      }

      /**
       * AgeGate function.
       */
      function startAgegate(context, setting) {

        // Settings brought in from drupal config.
        var VERIFICATIONTYPE = Drupal.settings.agegate.verifcationtype;
        var TPLHTML = Drupal.settings.agegate.popuphtml;
        var COOKIE_DOMAIN = Drupal.settings.agegate.cookiedomain;
        var COOKIE_NAME = Drupal.settings.agegate.cookiename;
        var COOKIE_FORMAT = Drupal.settings.agegate.cookieformat;
        var CANCEL_URL = Drupal.settings.agegate.cancelurl;
        var LEGALAGE = Drupal.settings.agegate.legalage;

        var agegateHtmlWrapper = '<div id="agegate" style="display: block"><div class="agegate-message">' + TPLHTML + '</div></div>';

        // Check for presence of the cookie, if none, append the HTML file.
        if (Cookie.get(COOKIE_NAME) === null) {
          $('body').append(agegateHtmlWrapper);
        }

        // Register event listener for age gate submit button.
        $('#agegate_verify').click(function () {
          if (validate() === true) {
            var cookieValue = '{"ROWCOUNT": 1, "COLUMNS": ["ISLEGAL", "REDIRECTURL"], "DATA":{"ISLEGAL": ["1"], "REDIRECTURL": ["' + CANCEL_URL + '"]}}';
            console.log(COOKIE_FORMAT);
            if(COOKIE_FORMAT === '1'){
              cookieValue = escape(cookieValue);
            }

            Cookie.set(COOKIE_NAME, cookieValue, COOKIE_DOMAIN, 1);
            $('#agegate').css('display', 'none');
          }
        });

        // Register event listener for age gate cancel button.
        $('#agegate_cancel').click(function () {
          window.location = CANCEL_URL;
        });

        // Age Validation Logic.
        function validate() {
          if (VERIFICATIONTYPE === '1') {
            var cutoff = new Date();
            cutoff.setFullYear(cutoff.getFullYear() - LEGALAGE);
            var birthday = new Date($('#agegate_birthday').val());
            var result = cutoff - birthday;
            if (result > 0) {
              return true;
            }
            else {
              return false;
            }
          }
          else if (VERIFICATIONTYPE === '2') {
            return true;
          }
        }
      }
    }
  };

  var Cookie = {
    set: function (name, value, domain, days) {
      var date;
      var expires;

      if (days) {
        date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
      }
      else {
        expires = "";
      }
      document.cookie = name + "=" + value + expires + "; path=/; domain=" + domain;
    },

    get: function (name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
        }
      }
      return null;
    },

    erase: function (name) {
      Cookie.set(name, '', -1);
    }
  };

})(jQuery);
