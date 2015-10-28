"use strict";
/**
* AgeGate function
*/
function startAgegate(context, setting) {
  //settings brought in from drupal config
  var DEBUG         = Drupal.settings.agegate.debugmode;
  var TPLHTML       = Drupal.settings.agegate.popuphtml;
  var COOKIE_DOMAIN = Drupal.settings.agegate.cookiedomain;
  var COOKIE_NAME   = Drupal.settings.agegate.cookiename;
  var COOKIE_FORMAT = Drupal.settings.agegate.cookieformat;
  var VERIFY_BTN_TEXT = Drupal.settings.agegate.verifybtntext;
  var CANCEL_BTN_TEXT = Drupal.settings.agegate.cancelbtntext;
  var CANCEL_URL    = Drupal.settings.agegate.cancelurl;
  var DISPLAY    	  = Drupal.settings.agegate.displaypopup;
  var LEGALAGE      = Drupal.settings.agegate.legalage;

  if(COOKIE_FORMAT === 1){
    jQuery.cookie.raw = true;
  }else{
    jQuery.cookie.raw = false;
  }

  var cookie_options = {
    "expires": 1,
    "path": '/',
    "domain" : COOKIE_DOMAIN
  }
  // var COOKIE_NAME = 'ISLEGAL';
  var agegateHtmlWrapper = '<div id="agegate" style="display:block"><div class="agegate-message">' + TPLHTML + '<div class="buttonBar"><button id="agegateCancel" class="button verify-age">' + CANCEL_BTN_TEXT + '</button><button id="agegateVerify" class="button verify-age">' + VERIFY_BTN_TEXT + '</button></div></div></div>';

  var cookieValue = '{"ROWCOUNT":1,"COLUMNS":["ISLEGAL","REDIRECTURL"],"DATA":{"ISLEGAL":["1"],"REDIRECTURL":["' + CANCEL_URL + '"]}}';

  if(jQuery.cookie(COOKIE_NAME) == null){
    if(DEBUG === 1) {
      console.log("Agegate: Cookie's name is: " + COOKIE_NAME);
      console.log("Agegate: Agegate / eWinery cookie not found");
      console.log("Agegate: Displaying Agegate");
    }

    jQuery('body').append(agegateHtmlWrapper);
  }

  // Register event listener for age gate submit button
  jQuery('#agegateVerify').click(function() {
    if(DEBUG === 1) {
      console.log("Agegate: user's age is: " + jQuery('#agegate-userage').val() );
      console.log("Agegate: User has confirmed legal age, setting cookie");
      console.log("Agegate: Hiding agegate");
    }

    jQuery.cookie(COOKIE_NAME, cookieValue, cookie_options);
    jQuery('#agegate').css('display','none');
  });

  jQuery('#agegateCancel').click(function() {
    if(DEBUG === 1) {
      console.log("Agegate: User has canceled.");
    }
    window.location = CANCEL_URL;
  });
}

/**
* Drupal Behavior
*/
Drupal.behaviors.agegate = {
  attach: function (context, settings) {
    if(Drupal.settings.agegate.displaypopup === true){
      startAgegate(context, settings);
    }
  }
}
