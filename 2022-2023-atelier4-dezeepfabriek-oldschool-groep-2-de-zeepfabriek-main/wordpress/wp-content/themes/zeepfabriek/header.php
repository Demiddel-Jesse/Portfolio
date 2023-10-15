<!DOCTYPE html>
<html lang="nl">

<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<?php wp_head(); ?>

	<!-- <script src="./dist/js/main.js"></script> -->
	<script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js" integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossorigin=""></script>

	<link rel="stylesheet" href="dist/css/styles.css" />
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin="" />

	<title>Zeepfabriek</title>
</head>

<body id="body">
	<!-- Navigatie -->
	<header class="c-header">
		<div data-sticky-container>
			<div class="grid-container c-header__content sticky js-nav" data-sticky data-margin-top="0">
				<ul class="c-nav c-nav--secondary menu cell align-right">
					<li class="c-nav__item">
						<div class="c-search">
							<input type="text" placeholder="Hoi, wat zoek je?" class="c-search__input" />
							<button class="c-search__button js-searchButton">
								<img src="<?php echo get_template_directory_uri() . "/img/icons/search-icon.svg" ?>" alt="search-icon" />
							</button>
						</div>
					</li>

					<li class="c-nav__item">
						<?php if (is_user_logged_in()) { ?>
							<a href="<?php echo get_permalink(get_option('woocommerce_myaccount_page_id')); ?>">
								<svg xmlns="http://www.w3.org/2000/svg" width="34.551" height="32.929" viewBox="0 0 34.551 32.929">
									<path id="user" d="M33.625,36.491A9.246,9.246,0,1,0,24.4,27.22,9.221,9.221,0,0,0,33.625,36.491Zm0-16.059a6.789,6.789,0,1,1-6.789,6.839A6.789,6.789,0,0,1,33.625,20.432Zm-16.009,30.5H49.735a1.233,1.233,0,0,0,1.216-1.216,11.632,11.632,0,0,0-11.6-11.6H28a11.632,11.632,0,0,0-11.6,11.6A1.233,1.233,0,0,0,17.616,50.929ZM28,40.544H39.349A9.137,9.137,0,0,1,48.418,48.5H18.933A9.137,9.137,0,0,1,28,40.544Z" transform="translate(-16.4 -18)" fill="#898787" />
								</svg>

							</a>
						<?php } else { ?>
							<a href="<?php echo get_permalink(get_option('woocommerce_myaccount_page_id')); ?>">
								<svg xmlns="http://www.w3.org/2000/svg" width="34.551" height="32.929" viewBox="0 0 34.551 32.929">
									<path id="user" d="M33.625,36.491A9.246,9.246,0,1,0,24.4,27.22,9.221,9.221,0,0,0,33.625,36.491Zm0-16.059a6.789,6.789,0,1,1-6.789,6.839A6.789,6.789,0,0,1,33.625,20.432Zm-16.009,30.5H49.735a1.233,1.233,0,0,0,1.216-1.216,11.632,11.632,0,0,0-11.6-11.6H28a11.632,11.632,0,0,0-11.6,11.6A1.233,1.233,0,0,0,17.616,50.929ZM28,40.544H39.349A9.137,9.137,0,0,1,48.418,48.5H18.933A9.137,9.137,0,0,1,28,40.544Z" transform="translate(-16.4 -18)" fill="#898787" />
								</svg>

							</a>
						<?php } ?>
					</li>


					<li class="c-nav__item c-nav__item--cart">
						<?php
						function is_in_cart( $ids ) {
							// Initialise
							$found = false;
						
							// Loop through cart items
							foreach( WC()->cart->get_cart() as $cart_item ) {
								// For an array of product IDs
								if( is_array($ids) && ( in_array( $cart_item['product_id'], $ids ) || in_array( $cart_item['variation_id'], $ids ) ) ){
									$found = true;
									break;
								}
								// For a unique product ID (integer or string value)
								elseif( ! is_array($ids) && ( $ids == $cart_item['product_id'] || $ids == $cart_item['variation_id'] ) ){
									$found = true;
									break;
								}
							}
						
							return $found;
						}

						$navs = get_nav_menu_locations();
						if (array_key_exists('icon-menu', $navs)) {
							$idIconNavigatie = $navs['icon-menu'];

							$menu_items = wp_get_nav_menu_items($idIconNavigatie);

							foreach ($menu_items as $item) {
								if(is_in_cart(array(119,287,320))) {
									echo '<a href="' . $item->url . '">
										<div class="c-nav__toggleContainerdot">
											<svg id="Icon_feather-shopping-cart1" data-name="Icon feather-shopping-cart" xmlns="http://www.w3.org/2000/svg" width="37.019" height="35.472" viewBox="0 0 37.019 35.472">
												<path id="Path_63" data-name="Path 63" d="M15.093,31.546A1.546,1.546,0,1,1,13.546,30,1.546,1.546,0,0,1,15.093,31.546Z" transform="translate(0.324 0.88)" fill="none" stroke="#898787" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
												<path id="Path_64" data-name="Path 64" d="M31.593,31.546A1.546,1.546,0,1,1,30.046,30,1.546,1.546,0,0,1,31.593,31.546Z" transform="translate(0.834 0.88)" fill="none" stroke="#898787" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
												<path id="Path_65" data-name="Path 65" d="M1.5,1.5H7.685l4.144,20.705a3.093,3.093,0,0,0,3.093,2.49h15.03a3.093,3.093,0,0,0,3.093-2.49L35.519,9.232H9.232" transform="translate(0 0)" fill="none" stroke="#898787" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
											</svg>
											<div class="c-nav__toggleContainerdot--circle"></div>
										</div>
									</a>';
								} else {
									echo '<a href="' . $item->url . '">
										<svg id="Icon_feather-shopping-cart1" data-name="Icon feather-shopping-cart" xmlns="http://www.w3.org/2000/svg" width="37.019" height="35.472" viewBox="0 0 37.019 35.472">
											<path id="Path_63" data-name="Path 63" d="M15.093,31.546A1.546,1.546,0,1,1,13.546,30,1.546,1.546,0,0,1,15.093,31.546Z" transform="translate(0.324 0.88)" fill="none" stroke="#898787" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
											<path id="Path_64" data-name="Path 64" d="M31.593,31.546A1.546,1.546,0,1,1,30.046,30,1.546,1.546,0,0,1,31.593,31.546Z" transform="translate(0.834 0.88)" fill="none" stroke="#898787" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
											<path id="Path_65" data-name="Path 65" d="M1.5,1.5H7.685l4.144,20.705a3.093,3.093,0,0,0,3.093,2.49h15.03a3.093,3.093,0,0,0,3.093-2.49L35.519,9.232H9.232" transform="translate(0 0)" fill="none" stroke="#898787" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
										</svg>
									</a>';
								}
							}
						} else {
							echo "icon navigatie niet ingesteld op dashboard";
						}
						?>
					</li>

					<li class="c-nav__item c-nav__item--language">
						<button class="c-nav__languagebtn" type="button" data-toggle="language-dropdown">
							Nederlands
							<img src="<?php echo get_template_directory_uri() . "/img/icons/down-arrow-icon.svg" ?>" alt="down-arrow-icon" />
						</button>
						<div class="dropdown-pane" data-position="bottom" data-alignment="center" id="language-dropdown" data-dropdown>
							<ul class="menu vertical">
								<li>
									<a href="#" class="p-0">Frans</a>
								</li>
								<li>
									<a href="#" class="p-0">Engels</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
				<nav class="c-nav c-nav--primary menu tablet-vertical">
					<a href="<?php echo home_url(); ?>" class="c-nav__logo">
						<div class="c-nav__logo--animatie"></div>
					</a>
					<ul class="menu">

						<?php

						$navs = get_nav_menu_locations();
						if (array_key_exists('main-menu', $navs)) {
							$idMainNavigatie = $navs['main-menu'];

							$menu_items = wp_get_nav_menu_items($idMainNavigatie);

							foreach ($menu_items as $item) {
								echo '<li class="c-nav__item ' . vince_check_active_menu($item) . '"><a class="c-nav__link" href="' . $item->url . '">' . $item->title . '</a></li>';
							}
						} else {
							echo "main navigatie niet ingesteld op dashboard";
						}
						?>
					</ul>
				</nav>
			</div>
		</div>
		<div data-sticky-container>
			<div class="grid-container c-header__content c-header__content--mobile sticky" data-sticky data-margin-top="0" data-stick-to="top">
				<a href="<?php echo home_url(); ?>" class="c-nav__logo">
					<div class="c-nav__logo--animatie"></div>
				</a>
				<div class="c-nav__toggleContainer">


					<?php if (is_user_logged_in()) { ?>
						<a href="<?php echo get_permalink(get_option('woocommerce_myaccount_page_id')); ?>">
							<svg xmlns="http://www.w3.org/2000/svg" width="34.551" height="32.929" viewBox="0 0 34.551 32.929">
								<path id="user" d="M33.625,36.491A9.246,9.246,0,1,0,24.4,27.22,9.221,9.221,0,0,0,33.625,36.491Zm0-16.059a6.789,6.789,0,1,1-6.789,6.839A6.789,6.789,0,0,1,33.625,20.432Zm-16.009,30.5H49.735a1.233,1.233,0,0,0,1.216-1.216,11.632,11.632,0,0,0-11.6-11.6H28a11.632,11.632,0,0,0-11.6,11.6A1.233,1.233,0,0,0,17.616,50.929ZM28,40.544H39.349A9.137,9.137,0,0,1,48.418,48.5H18.933A9.137,9.137,0,0,1,28,40.544Z" transform="translate(-16.4 -18)" fill="#898787" />
							</svg>


						</a>
					<?php } else { ?>
						<a href="<?php echo get_permalink(get_option('woocommerce_myaccount_page_id')); ?>">
							<svg xmlns="http://www.w3.org/2000/svg" width="34.551" height="32.929" viewBox="0 0 34.551 32.929">
								<path id="user" d="M33.625,36.491A9.246,9.246,0,1,0,24.4,27.22,9.221,9.221,0,0,0,33.625,36.491Zm0-16.059a6.789,6.789,0,1,1-6.789,6.839A6.789,6.789,0,0,1,33.625,20.432Zm-16.009,30.5H49.735a1.233,1.233,0,0,0,1.216-1.216,11.632,11.632,0,0,0-11.6-11.6H28a11.632,11.632,0,0,0-11.6,11.6A1.233,1.233,0,0,0,17.616,50.929ZM28,40.544H39.349A9.137,9.137,0,0,1,48.418,48.5H18.933A9.137,9.137,0,0,1,28,40.544Z" transform="translate(-16.4 -18)" fill="#898787" />
							</svg>


						</a>
					<?php } ?>


					<?php
					$navs = get_nav_menu_locations();
					if (array_key_exists('icon-menu', $navs)) {
						$idIconNavigatie = $navs['icon-menu'];

						$menu_items = wp_get_nav_menu_items($idIconNavigatie);

						foreach ($menu_items as $item) {
							echo '<a href="' . $item->url . '">
										<svg id="Icon_feather-shopping-cart2" data-name="Icon feather-shopping-cart" xmlns="http://www.w3.org/2000/svg" width="37.019" height="35.472" viewBox="0 0 37.019 35.472">
										<path id="Path_63" data-name="Path 63" d="M15.093,31.546A1.546,1.546,0,1,1,13.546,30,1.546,1.546,0,0,1,15.093,31.546Z" transform="translate(0.324 0.88)" fill="none" stroke="#898787" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
										<path id="Path_64" data-name="Path 64" d="M31.593,31.546A1.546,1.546,0,1,1,30.046,30,1.546,1.546,0,0,1,31.593,31.546Z" transform="translate(0.834 0.88)" fill="none" stroke="#898787" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
										<path id="Path_65" data-name="Path 65" d="M1.5,1.5H7.685l4.144,20.705a3.093,3.093,0,0,0,3.093,2.49h15.03a3.093,3.093,0,0,0,3.093-2.49L35.519,9.232H9.232" transform="translate(0 0)" fill="none" stroke="#898787" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
										</svg>
									</a>';
						}
					} else {
						echo "icon navigatie niet ingesteld op dashboard";
					}
					?>


					<div>
						<input type="checkbox" name="nav-toggle" id="nav-toggle" class="c-nav__toggle" />
						<span class="c-nav__bar c-nav__bar--top"></span>
						<span class="c-nav__bar c-nav__bar--mid"></span>
						<span class="c-nav__bar c-nav__bar--bottom"></span>
						<ul class="c-nav__list menu vertical">
							<?php
							$navs = get_nav_menu_locations();
							if (array_key_exists('main-menu', $navs)) {
								$idMainNavigatie = $navs['main-menu'];

								$menu_items = wp_get_nav_menu_items($idMainNavigatie);

								foreach ($menu_items as $item) {
									echo '<li class="' . vince_check_active_menu($item) . '" ><a href="' . $item->url . '">' . $item->title . '</a></li>';
								}
							} else {
								echo "main navigatie niet ingesteld op dashboard";
							}
							?>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</header>

	<main>