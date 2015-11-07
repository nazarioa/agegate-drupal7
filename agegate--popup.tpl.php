/**
 * @file
 * Displays the Agegate.
 *
 * Available variables:
 * - $agegate (array): Contains all the variables avilable to the Agegare
 *   - $agegate['name']: Title set in the settings.
 *   - $agegate['message']: The message set in the settings.
 *   - $agegate['validate_box']: REQUIRED - Contains the code. This changes
 *     depending on the validation type.
 *   - $agegate['cancel_button']: Code for a cancel button if you need.
 *   - $agegate['verify_button']: REQUIRED - button needed to triger the check.
 *
 * @see template_preprocess_forum_list()
 *
 * @ingroup themeable
 */

<!-- start agegate__popup.tpl.php -->
<div class="title">
  <?php echo $agegate['name']; ?> <!-- title - not-required -->
</div>

<?php echo $agegate['message']; ?> <!-- legal message - not-required -->
<?php echo $agegate['validate_box']; ?> <!-- validation button code - REQUIRED -->

<div class="button-bar">
  <?php echo $agegate['cancel_button']; ?> <!-- cancel button code - not required -->
  <?php echo $agegate['verify_button']; ?> <!-- verify button code - REQUIRED -->
</div>
<!-- end agegate__popup.tpl.php -->
