<div class="cell small-6  ">
    <div class="c-stores__items--imgcontainer">
        <div class="c-stores__text">
            <h3><?php echo get_the_title() ?></h3>
            <hr>
            <p><?php echo the_content() ?>
                <br>
                <?php echo get_post_meta($post->ID, '_winkels_tel', true); ?>
            </p>
            <hr>
            <p>weekdagen: <?php echo get_post_meta($post->ID, '_winkels_weekdagen', true); ?>u <br>
                zaterdag: <?php echo get_post_meta($post->ID, '_winkels_zaterdag', true); ?>u <br>
                zondag: <?php echo get_post_meta($post->ID, '_winkels_zondag', true); ?>u</p>
        </div>
        <img src="<?php echo get_the_post_thumbnail_url() ?>" alt="<?php echo get_the_title() ?>">

    </div>
</div>