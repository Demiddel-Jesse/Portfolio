<?php
// Get product information
global $product;
$id = $product->get_id();
$title = $product->get_title();
$image = wp_get_attachment_image_src( get_post_thumbnail_id( $id ), 'single-post-thumbnail' )[0];
$price = $product->get_price_html();
$description = $product->get_description();
$cat = $product->get_categories();

?>
    <section>
        <div class="grid-container">
            <div class="grid-x">
                <div class="columns end small-12 medium-12 large-10 large-offset-1 c-detailtitle">
                <?php
// Get the current URL and split it into an array of segments
$url = rtrim($_SERVER['REQUEST_URI'], '/');
$segments = explode('/', $url);

// Define the base URL and start building the breadcrumb trail
$base_url = 'http://localhost/2022-2023-atelier4-dezeepfabriek-oldschool-groep-2-de-zeepfabriek/wordpress';
$breadcrumb = '<a href="' . $base_url . '">Home</a>';

// Add a link to the shop page as the second breadcrumb
$shop_url = $base_url . '/winkel';
$shop_name = 'Winkel';
$breadcrumb .= ' <span>/</span> <a href="' . $shop_url . '">' . $shop_name . '</a>';

// Get the last segment and use it as the product name
$product_name = ucfirst(str_replace('-', ' ', $segments[count($segments)-1]));
$breadcrumb .= ' <span>/</span> <span class="current">' . $product_name . '</span>';

// Output the breadcrumb trail
echo '<div class="c-detailtitle__subtitle">' . $breadcrumb . '</div>';
?>
            <h3 class="c-detailtitle__title"><?php echo $title ?></h3>
                    <div class="c-detailtitle__tags">
                        <span class="c-detailtitle__tags--tag1">Gevoelige huid</span>
                        <span class="c-detailtitle__tags--tag2">Vegan essentials</span>
                    </div>
                </div>
            </div>

            <div class="grid-x c-detail">
                <div class="columns small-12 medium-12 large-4 large-offset-1 c-detail__itemabove">
                    <img class="c-detail__itemabove--img" src="<?php echo $image ?>" alt="detail-img">
                </div>
                <div class="columns end small-12 medium-12 large-5 large-offset-1  c-detail__itemabove">
                    <p class="c-detail__itemabove--desc"><?php echo $description ?></p>
                    <ul class="c-detail__itemabove--list">
                        <li>Verbeterde formule</li>
                        <li>Meest populaire producten</li>
                        <li>Gratis verzending vanaf 50€</li>
                    </ul>
                    <div class="c-detail__itemabove--price">
                        <p><?php echo $price?></p>
                        <P>Incl. btw</P>
                    </div>
                    <div class="c-detail__itemabove--weights">
                        <?php
                        $attribute = 'pa_formaat'; // Replace 'pa_formaat' with the slug of your 'formaat' attribute.
                        $terms = wc_get_product_terms($id, $attribute);
                        
                        foreach ($terms as $term) {
                            echo '<span>' . $term->name . '</span>';
                        }
                    ?>
                    </div>
                    <p class="c-detail__itemabove--delivery">
                        <ul>
                            <li>Leverbaar binnen 1-2 werkdagen</li>
                        </ul> 
                    </p>
                </div>
                <div class="columns small-12 medium-12 large-4 large-offset-1 c-detail__itemunder">
					<ul class=" c-tabs tabs" data-tabs id="example-tabs">
						<li class="tabs-title is-active"><a href="#panel1" aria-selected="true">De tips van Catherine</a></li>
						<li class="tabs-title"><a data-tabs-target="panel2" href="#panel2">Handleiding</a></li>
						<li class="tabs-title"><a data-tabs-target="panel3" href="#panel3">Reviewen</a></li>
					  </ul>
					<div class="tabs-content" data-tabs-content="example-tabs">
						<div class="tabs-panel is-active" id="panel1">
							<p><img src="img/icons/Bubble.svg" alt=""> <span></span>Geen bad? Neem de badmelk mee in de douche. Gebruik wat badmelk op een washandje, wrijf het lichaam in en geniet van de heerlijke geur!.</p>
							<p><img src="img/icons/Bubble.svg" alt=""> <span></span>De aanwezige plantaardige oliën zorgen dat de huid niet uitdrogen.</p>
                        </div>
						<div class="tabs-panel" id="panel2">
							<p><img src="img/icons/Bubble.svg" alt=""> <span></span>Voeg minimum 100g badmelk aan het water toe.</p>
							<p><img src="img/icons/Bubble.svg" alt=""> <span></span>De ideale watertemperatuur tussen 36°C en 39°C voor een bad van 15 a 20 minuten.</p>
							<p><img src="img/icons/Bubble.svg" alt=""> <span></span>De huid drogen door ze zachtjes met een handdoek af te deppen. (Niet wrijven!)</p>
						  </div>
						<div class="tabs-panel" id="panel3">
							<p></p>
						  </div>
					  </div>
				</div>
                <div class="columns end small-12 medium-12 large-5 large-offset-1 c-detail__itemunder">
					<div class="grid-x">		
					<div class="c-detail__count">
					<input type="number" value="1">
				  </div>
				  <?php
                                            // Display "Add to Cart" button
                                            add_filter( 'woocommerce_loop_add_to_cart_link', 'custom_add_to_cart_button', 10, 2 );
                                            echo sprintf(
                                                '<a href="%s" data-product_id="%s" class="button c-btn c-btn__shopping"><img class="c-btn__shopping--icon" src="' . get_template_directory_uri() . '/img/icons/shopping-cart-product.svg" alt="shopping-cart-product" /></a>', 
                                                esc_url( $product->add_to_cart_url() ), 
                                                $id, 
                                                __('Add to Cart', 'woocommerce' )
                                            );
                                            remove_filter( 'woocommerce_loop_add_to_cart_link', 'custom_add_to_cart_button', 10 );
                                        ?>		
				</span>	
				</div>
            </div>

        </div>
</section>
<section>
	<div class="grid-container">
		<div class="text-center">
			<h2>Gelijkaardige producten</h2>
		</div>
		<div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-3 xlarge-up-4">
                        <?php
// Get the current product object
$product = wc_get_product();

// Get the categories for the current product
$terms = get_the_terms( $product->get_id(), 'product_cat' );

if ( $terms && ! is_wp_error( $terms ) ) {

  // Get the first category object
  $category = $terms[0];

  // Set up the query for related products
  $args = array(
    'post_type' => 'product',
    'posts_per_page' => 4,
    'post__not_in' => array( $product->get_id() ),
    'tax_query' => array(
      array(
        'taxonomy' => 'product_cat',
        'field' => 'term_id',
        'terms' => $category->term_id,
        'operator' => 'IN',
      ),
    ),
  );
  $query = new WP_Query( $args );

  // Output the related products in cards
  if ( $query->have_posts() ) {
    while ( $query->have_posts() ) {
      $query->the_post();
      get_template_part( 'custom-card', '', array( 'product' => $product ) );
    }
    echo '</div>';
  }

  // Restore the original post data
  wp_reset_postdata();
} ?>

						</div>
					</div>
					<div class="grid-x">
						<div class="cell small-12 small-offset-0 medium-4 medium-offset-4">
							<a href="<?php echo esc_url( wc_get_page_permalink( 'shop' ) ); ?>" class="button expanded c-btn c-btn__detail c-btn--webshop">
								Naar de webshop
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 12.156 7.753">
									<path id="Icon_weather-direction-right" data-name="Icon weather-direction-right" d="M11.928,17.232a.951.951,0,0,0,.276.684.811.811,0,0,0,.672.24h7.9l-1.236,1.3a.928.928,0,0,0,0,1.344.931.931,0,0,0,.7.276.851.851,0,0,0,.636-.324l2.94-2.892a.931.931,0,0,0,.276-.7,1,1,0,0,0-.288-.7L20.832,13.6a.806.806,0,0,0-.648-.276.922.922,0,0,0-.684.264.879.879,0,0,0-.276.672.932.932,0,0,0,.276.684l1.272,1.3H12.864a.925.925,0,0,0-.672.3A1.01,1.01,0,0,0,11.928,17.232Z" transform="translate(-11.928 -13.319)" />
								</svg>
							</a>
						</div>
					</div>
				</div>
	</section>
<?php
if ( ! function_exists( 'custom_add_to_cart_button' ) ) {
    function custom_add_to_cart_button( $button, $product ) {
        return sprintf( '<a href="%s" %s><img class="c-btn__shopping--icon" src="' . get_template_directory_uri() . '/img/icons/shopping-cart-product.svg" alt="shopping-cart-product" /></a>', esc_url( $product->add_to_cart_url() ), $product->get_type() === 'variable' ? 'class="button product_type_variable"' : 'class="button product_type_simple add_to_cart_button ajax_add_to_cart"', __('Add to cart', 'woocommerce' ) );
    }
}
?>