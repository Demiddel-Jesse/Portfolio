<?php
// Get product information
global $product;
$id = $product->get_id();
$title = $product->get_title();
$image = wp_get_attachment_image_src(get_post_thumbnail_id($id), 'single-post-thumbnail')[0];
$price = $product->get_price_html();

?>
<div class="cell">
	<div class="card c-product">

		<?php
		if (get_product_age($id) < 2) {
		?>
			<div class="c-product__tag text-center">
				Nieuw!
			</div>
		<?php
		} elseif ($product->get_stock_quantity() < 5) {
		?>
			<div class="c-product__tag text-center">
				Bijna uitverkocht!
			</div>
		<?php
		} elseif ($product->get_sale_price()) {
		?>
			<div class="c-product__tag text-center">
				On SALE!
			</div>
		<?php
		}
		?>

		<div class="c-product__imgcontainer">
			<img src="<?php echo $image ?>" alt="aardbei-zeep" />
		</div>
		<div class="card-section c-productcontent">
			<h4 class="text-center"><?php echo  $title ?></h4>
			<div class="c-productcontent__stars">
				<img src="<?php echo get_template_directory_uri() . "/img/icons/star-fill.svg" ?>" class="c-productcontent__stars--star" alt="star" />
				<img src="<?php echo get_template_directory_uri() . "/img/icons/star-fill.svg" ?>" alt="star" />
				<img src="<?php echo get_template_directory_uri() . "/img/icons/star-fill.svg" ?>" alt="star" />
				<img src="<?php echo get_template_directory_uri() . "/img/icons/star-fill.svg" ?>" alt="star" />
				<img src="<?php echo get_template_directory_uri() . "/img/icons/star-fill.svg" ?>" class="c-productcontent__stars--star" alt="star" />
				<span class="c-productcontent__stars--desc">(10)</span>
			</div>

			<p class="c-productcontent__price"><?php echo $price ?></p>
			<div class="c-productcontent__buttons">
				<a href="<?php echo get_permalink($product->get_id()); ?>" class="button c-btn c-btn__detail"> Bekijk product </a>
				<?php
				// Display "Add to Cart" button
				add_filter('woocommerce_loop_add_to_cart_link', 'custom_add_to_cart_button', 10, 2);
				echo sprintf(
					'<a href="%s" data-product_id="%s" class="button c-btn c-btn__shopping"><div class="c-btn__shopping--animatie"></div></a>',
					esc_url($product->add_to_cart_url()),
					$id,
					__('Add to Cart', 'woocommerce')
				);
				remove_filter('woocommerce_loop_add_to_cart_link', 'custom_add_to_cart_button', 10);
				?>
			</div>
		</div>
	</div>
</div>

<?php
if (!function_exists('custom_add_to_cart_button')) {
	function custom_add_to_cart_button($button, $product)
	{
		return sprintf('<a href="%s" %s><div class="c-btn__shopping--animatie"></div></a>', esc_url($product->add_to_cart_url()), $product->get_type() === 'variable' ? 'class="button product_type_variable"' : 'class="button product_type_simple add_to_cart_button ajax_add_to_cart"', __('Add to cart', 'woocommerce'));
	}
}
?>