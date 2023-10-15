<?php /* Template Name: Contact */ ?>
<?php get_header(); ?>

<section class="js-contact-page">
    <section class="c-contact grid-container">

        <div class="grid-x grid-padding-x">

        </div>
        <form id="form">
            <div class="grid-container">
                <section class="c-breadcrumbs">
                    <nav aria-label="You are here:" role="navigation">
                        <ul class="breadcrumbs">
                            <li><a href="#">Home</a></li>
                            <li class="disabled">Contact</li>
                        </ul>
                    </nav>
                </section>
                <div class="small-6 cell">
                    <h1>Neem contact met ons op</h1>
                    <p>Bel ons op 050 61 52 71 (van maandag tot vrijdag tussen 11u en 18u) of mail ons op info@dezeepfabriek.be.
                        Ons Zeepfabriek at Home kantoor is gevestigd te Wollestraat 21, 8000 in Brugge.</p>
                </div>
            </div>
            <div class="grid-x grid-padding-x">

                <div class="medium-6 cell">
                    <label>Naam*
                        <input type="text" placeholder="Naam" required>
                    </label>
                    <label>E-mail*
                        <input type="email" placeholder="e-mail" required>
                    </label>
                    <label>Telefoonnummer
                        <input type="tel" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}-[0-9]{2}" placeholder="tel.">
                    </label>
                    <label>
                        Boodschap
                        <textarea placeholder=""></textarea>
                    </label>
                    <fieldset class="c-contact__checkbox">
                        <label for="checkbox1"><input id="checkbox1" type="checkbox"> Door verder te gaan bevestigt u dat u onze informatie hebt gelezen en hiermee akkoord gaat.</label>
                    </fieldset>
                    <a class=" c-blogarticle__btn c-topbanner__text--btn button expanded c-btn c-btn__detail js-submit">Verzenden</a>

                </div>
                <div class="medium-6 cell">
                    <label for="">
                        Winkels

                    </label>
                    <div id="map" class="js-map c-contact__map ">
                    </div>
                </div>
            </div>
        </form>
    </section>

    <section class="c-stores grid-container" id="winkels">
        <div class="c-sectionsplit">
            <img src="img/icons/section split.svg" alt="">
        </div>
        <h1>Of kom langs in één van onze winkels te Brugge, Gent, Brussel of Antwerpen.</h1>
        <div class="grid-x c-stores__items">
            
                <?php
                $arg = array(
                    'post_type' => array('winkels'),
                    'nopaging' => false,
                    'posts_per_page' => 4,
                    'order' => 'ASC',
                    'orderby' => 'date'
                );
                $query = new WP_Query($arg);
                if ($query->have_posts()) :
                    while ($query->have_posts()) : $query->the_post();
                    // $catVanDePost = get_the_category();

                    get_template_part('template-parts/post/content', 'winkelscontact');

                    endwhile;
                endif;
                wp_reset_query();
                ?>
                
            
        </div>
    </section>
</section>

<script type="text/javascript">
    const template_directory_uri = "<?php echo get_template_directory_uri(); ?>";
</script>
<?php get_footer(); ?>