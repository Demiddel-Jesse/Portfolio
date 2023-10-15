<div class="c-blogpost cell small-12 medium-6">
    <!-- img -->
    <div class="c-blogpost__imagecontainer">
        <img src="<?php echo get_the_post_thumbnail_url() ?>" alt="<?php echo get_the_title() ?>" class="c-blogpost__image" />
    </div>
    <!-- date -->
    <p class="c-blogpost__date"><?php echo get_the_date() ?></p>
    <!-- content -->
    <div>
        <!-- title + exerpt -->
        <div class="c-blogpost__content">
            <h3><?php echo get_the_title() ?></h3>
            <p><?php echo the_content() ?></p>
        </div>
        <!-- blogger -->
        <div class="c-blogpost__poster">
            <div class="c-blogpost__avatarcontainer">
                <img src="<?php echo get_avatar_url(get_the_author_meta( 'ID' )); ?>" alt="Catherine Moerman" class="c-blogpost__avatar" />
            </div>
            <div class="c-blogpost__name">
                <p><?php echo the_author_link(); ?></p>
                <p><?php echo get_post_meta($post->ID, '_blog_functie', true); ?></p>
            </div>
        </div>
    </div>
</div>