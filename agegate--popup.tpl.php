<?php
/**
 * @file
 * Displays the Agegate.
 *
 * Available variables:
 * - $agegate (array): Contains all the variables available to the Agegare
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
 ?>

<!-- start agegate__popup.tpl.php -->
<div class="title">
  <!-- title - not-required -->
  <?php echo $agegate['name']; ?>
</div>
<!-- legal message - not-required -->
<div class="message"><?php echo $agegate['message']; ?></div>
<!-- validation button code - REQUIRED -->
<?php echo $agegate['validate_box']; ?>

<div class="button-bar">
  <!-- cancel button code - not required -->
  <?php echo $agegate['cancel_button']; ?>
  <!-- verify button code - REQUIRED -->
  <?php echo $agegate['verify_button']; ?>
</div>
<!-- end agegate__popup.tpl.php -->
