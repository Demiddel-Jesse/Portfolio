<?php
/**
 * My Account page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/my-account.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.5.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * My Account navigation.
 * 
 *
 * @since 2.6.0
 */
do_action( 'woocommerce_account_navigation' ); ?>

<div>
<?php
$items = wc_get_account_menu_items();
$current = current( $items );
foreach ( $items as $endpoint => $label ) :
    if ( $endpoint !== key( $items ) && ( wc_get_account_endpoint_url( $endpoint ) == get_permalink() || is_wc_endpoint_url( $endpoint ) ) ) :
        ?>
        <h3><?php echo esc_html( $label ); ?></h3>
        <?php
    endif;
endforeach;
?>
</div>

<div class="woocommerce-MyAccount-content">
	<?php
		/**
		 * My Account content.
		 *
		 * @since 2.6.0
		 */
		do_action( 'woocommerce_account_content' );
	?>
</div>
