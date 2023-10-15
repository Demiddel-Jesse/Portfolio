<?php get_header(); ?>

<!-- Topbanner -->
<section class="c-topbanner">
  <div class="grid-container">
    <div class="grid-x">
      <div class="c-topbanner__text cell large-6">
        <h1><?php echo get_theme_mod('setting-txt-header-title', 'Lorem ipsum'); ?></h1>
        <p><?php echo get_theme_mod('setting-txt-header-desc', 'Lorem ipsum dolor sit'); ?></p>
        <a class="c-blogarticle__btn c-topbanner__text--btn button expanded c-btn c-btn__detail c-btn--webshop" href="./winkel">Naar de webshop

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 12.156 7.753">
            <path id="Icon_weather-direction-right" data-name="Icon weather-direction-right" d="M11.928,17.232a.951.951,0,0,0,.276.684.811.811,0,0,0,.672.24h7.9l-1.236,1.3a.928.928,0,0,0,0,1.344.931.931,0,0,0,.7.276.851.851,0,0,0,.636-.324l2.94-2.892a.931.931,0,0,0,.276-.7,1,1,0,0,0-.288-.7L20.832,13.6a.806.806,0,0,0-.648-.276.922.922,0,0,0-.684.264.879.879,0,0,0-.276.672.932.932,0,0,0,.276.684l1.272,1.3H12.864a.925.925,0,0,0-.672.3A1.01,1.01,0,0,0,11.928,17.232Z" transform="translate(-11.928 -13.319)" />
          </svg>
        </a>
      </div>
      <div class="cell large-6 c-topbanner__video">
        <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/805838875?h=20b0972b60&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>
  </div>
</section>

<!-- Product cards   -->
<section>
  <div class="grid-container">
    <div class="text-center" style="margin-top:2rem;">
      <h2>Een voorproefje van onze producten:</h2>
    </div>
    <div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-3 xlarge-up-4">
      <!-- card 1 -->


      <?php $prod_args = array(
        'post_type'      => 'product',
        'posts_per_page' => 6,
      );
      $prod_loop = new WP_Query($prod_args);

      $i = 1;
      // have to rewrite this to use the woocommerce querries
      while ($prod_loop->have_posts() && $i <= $posts_per_page) : $prod_loop->the_post();
        global $product;
        $id = $product->get_id();
        // echo '<p>';
        // echo $i;
        // echo '</p>';
        $i++;

      ?>

        <?php
        get_template_part('custom-card', '', array('product' => $product));
        ?>

      <?php
      endwhile;
      ?>


    </div>
  </div>
</section>

<!-- Blog article -->
<section class="c-blogarticle grid-container">
  <div class="grid-x">
    <?php
    $arg = array(
      'post_type' => array('blog'),
      'nopaging' => false,
      'posts_per_page' => 1,
      'order' => 'ASC',
      'orderby' => 'date'
    );
    $query = new WP_Query($arg);
    if ($query->have_posts()) :
      while ($query->have_posts()) : $query->the_post();
        // $catVanDePost = get_the_category();

        get_template_part('template-parts/post/content', 'bloghome');

      endwhile;
    endif;
    wp_reset_query();
    ?>
  </div>
</section>

<!-- Onze winkels -->
<section>
  <div class="grid-container">
    <div class="grid-x c-winkels">
      <div class="cell large-10">
        <h2 class="text-center"><?php echo get_theme_mod('setting-txt-winkels-title', 'Lorem ipsum'); ?></h2>
        <p class="text-center"><?php echo get_theme_mod('setting-txt-winkels-desc', 'Lorem ipsum dolor'); ?></p>
      </div>
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

          get_template_part('template-parts/post/content', 'winkels');

        endwhile;
      endif;
      wp_reset_query();
      ?>
    </div>
  </div>
</section>

<?php get_footer(); ?>