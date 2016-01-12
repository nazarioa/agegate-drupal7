<?php
/**
 * @file
 * Displays the Agegate.
 *
 * Available variables:
 *   - $agegate_name: Title set in the settings.
 *   - $agegate_message: The message set in the settings.
 *   - $agegate_html_validatebox: REQUIRED - Contains the code. This changes
 *     depending on the validation type.
 *   - $agegate_html_btn_cancel: Code for a cancel button if you need.
 *   - $agegate_html_btn_verify: REQUIRED - button needed to triger the check.
 *
 * @ingroup themeable
 */
 ?>

<!-- start agegate__popup.tpl.php -->
<div class="title">
  <!-- title - not-required -->
  <?php echo $agegate_name; ?>
</div>
<!-- legal message - not-required -->
<div class="message"><?php echo $agegate_message; ?></div>
<!-- validation button code - REQUIRED -->
<?php echo $agegate_html_validatebox; ?>

<div class="button-bar">
  <!-- cancel button code - not required -->
  <?php echo $agegate_html_btn_cancel; ?>
  <!-- verify button code - REQUIRED -->
  <?php echo $agegate_html_btn_verify; ?>
</div>
<!-- end agegate__popup.tpl.php -->
