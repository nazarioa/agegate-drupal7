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
