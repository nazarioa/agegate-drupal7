CONTENTS OF THIS FILE
---------------------
 * Introduction
 * Requirements
 * Installation
 * Configuration
 * Troubleshooting
 * FAQ
 * Maintainers


INTRODUCTION
------------

This module prompts the user for an age validator. If the user verifies his
or her age is over 21, a cookie gets deposited with this information.

 * For a full description of the module, visit the project page:
   https://www.drupal.org/sandbox/nazario.a/2600074

 * To submit bug reports and feature suggestions, or to track changes:
   https://www.drupal.org/sandbox/nazario.a/2600074


REQUIREMENTS
------------

This module requires the following modules:

 * jquery_update (https://www.drupal.org/project/jquery_update).
 * date (https://www.drupal.org/project/date).


INSTALLATION
------------

 * Install as you would normally install a contributed Drupal module. See:
 https://drupal.org/documentation/install/modules-themes/modules-7
 for further information.


CONFIGURATION
-------------

 * Configure user permissions in Administration » People » Permissions:

   - Use the administration pages and help (System module)

     The top-level administration categories require this permission to be
     accessible. The administration menu will be empty unless this permission
     is granted.

   - Access administration menu.

     Users in roles with the "Access administration menu" permission will see
     the administration menu at the top of each page.

 * Customize the settings in Administration » Configuration and modules »
   Agegate.

   Although the Agegate will render at this point, the cookie will not work with
    eWinery if it is not configured for your site.

   - Configure Cookie's Domain - It is a good idea to specify the base domain.

   - Configure Legal Drinking Age.

   - Configure Verification Type.


TROUBLESHOOTING
---------------

 * User verifies their age but the Agegate appears in eWinery:

     - Is the 'Cookie Domain' set correctly?

     - Is the 'Cookie Name' set to 'LEGALAGE'?


MAINTAINERS
-----------

Current maintainers:
 * Nazario A. Ayala (nazario.a) - https://www.drupal.org/u/nazarioa
