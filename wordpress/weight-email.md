# Add cart weight from costumer to e-mail

## Problem

Every time a costumer buy something, the client wants to recive an email with the cart weight

```php
add_action('woocommerce_email_after_order_table', 'show_total_weight', 10, 4);
function show_total_weight($order, $sent_to_admin, $plain_text, $email)
{
  if ('new_order' != $email->id) return;
  $total_weight = 0;
  // Set total_weight initial value
  foreach ($order->get_items() as $item_id => $product_item) {
    // Foreach to check every item in order
    $quantity = $product_item->get_quantity();
    // Get product quantity
    $product = $product_item->get_product();
    // Get products
    $product_weight = $product->get_weight();
    // Get product weight
    $total_weight += floatval($product_weight * $quantity);
    // Add to the variable the product weight
  }
  $style1 = 'style="width: 100%; font-family: \'Helvetica Neue\', Helvetica, Roboto, Arial, sans-serif; color: #737373; border: 1px solid #e4e4e4; border-top:0;"';
  $style2 = '  style="text-align: left; border-top-width: 4px; color: #737373; border: 1px solid #e4e4e4; padding: 12px;border-top:0;"';
  $style3 = ' style="text-align: left; border-top-width: 4px; color: #737373; border: 1px solid #e4e4e4; padding: 12px;border-top:0;"';
  // Add styles
  echo "<table class='td' cellspacing='0' cellpadding='6' $style1><tr><th $style2>" . __('Peso total: ', 'woocommerce') . "</th><td $style3>" . $total_weight . " kg</td></tr></table>";
  // Add TD to e-mail
}
```
