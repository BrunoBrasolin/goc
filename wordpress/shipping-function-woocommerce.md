# Shipping Function in WooCommerce

## Problem

Intergrate an shipping API with WooCommerce

```php
add_filter('woocommerce_package_rates', 'custom_shipping_costs', 20, 2);
function custom_shipping_costs($rates, $package)
{
  WC()->customer->get_postcode() == '' ? $zip = "01010010" : $zip = str_replace('-', '', WC()->customer->get_postcode());
  // Create a default zipcode

  $url = 'https://fast-stream-12340.herokuapp.com/shipping_quotation';
  // Set API url
  $data = [
    "ship_id" => "10",
    // Set ship_id to default (API)
    "weight_in_kilogramas" =>  strval(WC()->cart->cart_contents_weight),
    // Turn into string (API) cart weight
    "destination_zipcode" => $zip
    // Get zipcode
  ];

  $options = array(
    'http' => array(
      'header'  => "Content-Type: application/json",
      // Sent data via JSON
      'method'  => 'POST',
      'content' => http_build_query(json_encode($data))
      // Enconde data into JSON
    )
  );
  // Start CURL config
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt(
    $ch,
    CURLOPT_HTTPHEADER,
    ['Content-Type: application/json',]
  );
  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
  curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
  $context = curl_exec($ch);
  // End CURL config

  $return = json_decode($context);
  $tax = $return->ship_totalprice;
  // Get tax from API

  foreach ($rates as $rate_key => $rate) {
    if ($rate->method_id == 'flat_rate') {
      // Check if selected method is the shipping company
      $rates[$rate_key]->cost = $tax;
      // Set the tax
    }
  }
  return $rates;
}
```
