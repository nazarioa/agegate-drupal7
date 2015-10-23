/**
 * AgeGate function
 */
function startAgegate(context, setting){
    
    //settings brought in from drupal config
    var DEBUG         = Drupal.settings.agegate.debugmode;
    var COOKIE_DOMAIN = Drupal.settings.agegate.cookiedomain;
    var SITENAME      = Drupal.settings.agegate.sitename;
    var MESSAGE       = Drupal.settings.agegate.sitemessage;
    var LOGOSHOW      = Drupal.settings.agegate.logoshow;
    var LOGOURL       = Drupal.settings.agegate.logourl;
    var BUTTONTEXT    = Drupal.settings.agegate.buttontext;
    var DISPLAY    	  = Drupal.settings.agegate.display;
    
    //console.log(LOGOURL);
    
    jQuery.cookie.raw = false;
    var cookie_options = {
        "expires": 1,
        "path": '/',
        "domain" : COOKIE_DOMAIN
    }
    var COOKIE_NAME = 'ISLEGAL';

    var agegatehtml = '<div id="agegate" style="display:block"><div class="agegate-message">' + (LOGOSHOW == true ?'<img class="agegate-logo" src="' + LOGOURL + '" alt="Logo"/>' : '' ) + '<h1>Welcome to '+SITENAME+'</h1><p>'+MESSAGE+'</p><span id="olderthan21" class="button verify-age">' +BUTTONTEXT + '</span></div></div>';
    
    var cookieValue = '{"ROWCOUNT":1,"COLUMNS":["ISLEGAL","REDIRECTURL"],"DATA":{"ISLEGAL":["1"],"REDIRECTURL":["http://www.centurycouncil.org/"]}}';
    
    if(jQuery.cookie(COOKIE_NAME) == null){
        (DEBUG == true) ? console.log("Agegate: Agegate cookie not found") : false;
        jQuery('body').append(agegatehtml);
        (DEBUG == true) ? console.log("Agegate: Displaying Agegate") : false;
    }

    // Register event listener for age gate submit button
    jQuery('#olderthan21').click(function(){
        (DEBUG == true) ? console.log("Agegate: User has confirmed legal age, setting cookie") : false;
        jQuery.cookie(COOKIE_NAME, cookieValue, cookie_options);
        (DEBUG == true) ? console.log("Agegate: Hiding agegate") : false;
        jQuery('#agegate').css('display','none');
    });
}

/**
 * Drupal Behavior
 */
Drupal.behaviors.agegate = {
    attach: function (context, settings){
    	if(Drupal.settings.agegate.display == true){
            startAgegate(context, settings);
        }
    }
}