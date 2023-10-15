<?php wp_footer() ?>
</main>

<!-- Footer -->
<footer class="c-footer">
	<div class="c-footer__afscheiding">
		<img src="<?php echo get_template_directory_uri() . "/img/icons/footer-afscheiding.svg" ?>" alt="footer-afscheiding" />
	</div>

	<div class="grid-container">
		<div class="grid-x c-footer__content">
			<div class="cell grid-y align-self-start small-12 large-6 c-footer__leftContent">
				<div class="grid-x">
					<div class="cell c-footer__col">
						<ul>
							<li class="c-footer__item">
								<h2>De Zeepfabriek</h2>
							</li>
							<?php

							$navs = get_nav_menu_locations();
							if (array_key_exists('footer-menu', $navs)) {
								$idFooterNavigatie = $navs['footer-menu'];

								$menu_items = wp_get_nav_menu_items($idFooterNavigatie);

								foreach ($menu_items as $item) {
									echo '<li class="c-footer__item"><a href="' . $item->url . '">' . $item->title . '</a></li>';
								}
							} else {
								echo "footer navigatie niet ingesteld op dashboard";
							}

							?>
						</ul>
					</div>
					<div class="cell c-footer__col">
						<ul>
							<li class="c-footer__item">
								<h2>Klantendienst</h2>
							</li>
							<?php

							$navs = get_nav_menu_locations();
							if (array_key_exists('klant-menu', $navs)) {
								$idKlantNavigatie = $navs['klant-menu'];

								$menu_items = wp_get_nav_menu_items($idKlantNavigatie);

								foreach ($menu_items as $item) {
									echo '<li class="c-footer__item"><a href="' . $item->url . '">' . $item->title . '</a></li>';
								}
							} else {
								echo "klant navigatie niet ingesteld op dashboard";
							}

							?>
						</ul>
					</div>
				</div>
				<div class="c-footer__nieuwsbrief cell">
					<p>Schrijf je in voor de nieuwsbrief!</p>
					<label>
						En kom meer te weten over alle deals en nieuwe spullen die wij aanbieden.
						<input type="text" placeholder="e-mail" />
					</label>
					<button>
						<img src="<?php echo get_template_directory_uri() . "/img/icons/newsletter-icon.svg" ?>" alt="newsletter-icon" />
					</button>
				</div>
				<div class="c-footer__socialmedia cell">
					<a href="">
						<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
							<path id="Icon_awesome-facebook-square" data-name="Icon awesome-facebook-square" d="M35.714,2.25H4.286A4.286,4.286,0,0,0,0,6.536V37.964A4.286,4.286,0,0,0,4.286,42.25H16.54v-13.6H10.915v-6.4H16.54V17.371c0-5.549,3.3-8.614,8.363-8.614a34.077,34.077,0,0,1,4.957.432v5.446H27.069c-2.751,0-3.609,1.707-3.609,3.458V22.25H29.6l-.982,6.4H23.46v13.6H35.714A4.286,4.286,0,0,0,40,37.964V6.536A4.286,4.286,0,0,0,35.714,2.25Z" transform="translate(0 -2.25)" />
						</svg>
					</a>
					<a href="">
						<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
							<path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M20,11.982A10.255,10.255,0,1,0,30.252,22.238,10.238,10.238,0,0,0,20,11.982Zm0,16.923a6.667,6.667,0,1,1,6.666-6.667A6.679,6.679,0,0,1,20,28.905ZM33.063,11.563a2.392,2.392,0,1,1-2.392-2.392A2.386,2.386,0,0,1,33.063,11.563Zm6.791,2.428c-.152-3.2-.883-6.043-3.23-8.381s-5.176-3.07-8.379-3.231c-3.3-.187-13.2-.187-16.5,0C8.55,2.53,5.713,3.262,3.366,5.6S.3,10.777.135,13.982c-.187,3.3-.187,13.2,0,16.5.152,3.2.883,6.043,3.23,8.381s5.176,3.07,8.379,3.231c3.3.187,13.2.187,16.5,0,3.2-.152,6.041-.884,8.379-3.231s3.07-5.177,3.23-8.381c.187-3.3.187-13.192,0-16.494ZM35.589,34.028a6.749,6.749,0,0,1-3.8,3.8c-2.632,1.044-8.879.8-11.788.8s-9.165.232-11.788-.8a6.749,6.749,0,0,1-3.8-3.8c-1.044-2.633-.8-8.881-.8-11.791s-.232-9.167.8-11.791a6.749,6.749,0,0,1,3.8-3.8c2.632-1.044,8.879-.8,11.788-.8s9.165-.232,11.788.8a6.749,6.749,0,0,1,3.8,3.8c1.044,2.633.8,8.881.8,11.791S36.633,31.4,35.589,34.028Z" transform="translate(0.005 -2.238)" />
						</svg>
					</a>
				</div>
				<div class="c-footer__item c-footer__item--privacy cell">
					<a href="<?php echo site_url()."/algemenevoorwaarden"; ?>">Algemene voorwaarden</a>
					<a href="<?php echo site_url()."/Privacy"; ?>">Privacybeleid</a>
				</div>
			</div>
			<div class="cell c-footer__winkels">
				<ul>
					<li class="c-footer__item">
						<h2>De Zeepfabriek Gent</h2>
					</li>
					<li class="c-footer__item">
						<a href="<?php echo site_url()."/contact#winkels"; ?>">Meer info over deze winkel <img src="<?php echo get_template_directory_uri() . "/img/icons/right-arrow-icon.svg" ?>" alt="right-arrow-icon" /></a>
					</li>
					<li class="c-footer__item">
						<h2>De Zeepfabriek Antwerpen</h2>
					</li>
					<li class="c-footer__item">
						<a href="<?php echo site_url()."/contact#winkels"; ?>">Meer info over deze winkel <img src="<?php echo get_template_directory_uri() . "/img/icons/right-arrow-icon.svg" ?>" alt="right-arrow-icon" /></a>
					</li>
					<li class="c-footer__item">
						<h2>De Zeepfabriek Brussel</h2>
					</li>
					<li class="c-footer__item">
						<a href="<?php echo site_url()."/contact#winkels"; ?>">Meer info over deze winkel <img src="<?php echo get_template_directory_uri() . "/img/icons/right-arrow-icon.svg" ?>" alt="right-arrow-icon" /></a>
					</li>
					<li class="c-footer__item">
						<h2>De Zeepfabriek Brugge</h2>
					</li>
					<li class="c-footer__item">
						<a href="<?php echo site_url()."/contact#winkels"; ?>">Meer info over deze winkel <img src="<?php echo get_template_directory_uri() . "/img/icons/right-arrow-icon.svg" ?>" alt="right-arrow-icon" /></a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="c-footer__copyright">
		<p>©Howest</p>
	</div>
</footer>

<!-- jQuery must be imported before Foundation -->
<script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
<!-- this will include every plugin and utility required by Foundation -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.7.5/js/foundation.min.js"></script>
<!-- lottiefiles -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.7.14/lottie.min.js'></script>
<!-- our main script file -->
<script src="./dist/js/main.js"></script>

<script>
	// Logo hover

	let logoHover = document.querySelectorAll('.c-nav__logo--animatie');

	for (let i = 0; i < logoHover.length; i++) {
		let logoHover_animation = lottie.loadAnimation({
			container: logoHover[i],
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: "<?php echo get_template_directory_uri() . "/json/logo.json" ?>"
		});

		var reverse = 1;

		logoHover[i].addEventListener('mouseenter', (e) => {
			logoHover_animation.setDirection(reverse);
			logoHover_animation.play();
		});


		logoHover[i].addEventListener('mouseleave', (e) => {
			logoHover_animation.setDirection(-reverse);
			logoHover_animation.play();
		});
	}

	// shopping cart hover

	let shoppingHover = document.querySelectorAll('.c-btn__shopping--animatie');

	for (let i = 0; i < shoppingHover.length; i++) {
		let shoppingHover_animation = lottie.loadAnimation({
			container: shoppingHover[i],
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: "<?php echo get_template_directory_uri() . "/json/addtocart.json" ?>"
		});

		var reverse = 1;

		shoppingHover[i].addEventListener('mouseenter', (e) => {
			shoppingHover_animation.setDirection(reverse);
			shoppingHover_animation.play();
		});


		shoppingHover[i].addEventListener('mouseleave', (e) => {
			shoppingHover_animation.setDirection(-reverse);
			shoppingHover_animation.play();
		});
	}
</script>
</body>
</html>