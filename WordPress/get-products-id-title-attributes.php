<?php
function getProdutosAvalible()
{
  $args = array('post_type' => 'product');
  $results = new WP_Query($args);
  $products = $results->posts;
  $json_data = array();

  foreach ($products as $product) {
    $product = wc_get_product($product->ID);
    if ($product->is_visible()) {
      if ($product->is_in_stock()) {
        $attributes = array(
          'ano' => $product->get_attribute('pa_ano'),
          'modelo' => $product->get_attribute('pa_modelo'),
          'montadora' => $product->get_attribute('pa_montadora')
        );
        $json_data[] = array(
          'id' => $product->get_id(),
          'title' => $product->get_title(),
          'attributes' => $attributes,
          'categories' => $product->get_categories(),
        );
      }
    }
  }
  $output = json_encode($json_data);
}
