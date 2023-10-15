<div class="cell small-12 large-10 large-offset-1">
    <div class="media-object">
        <div class="media-object-section">
            <h3>Lichaam & gezicht</h3>
            <h1><?php echo get_the_title() ?></h1>
            <p><?php echo the_content() ?></p>
            <a class="c-blogarticle__btn button expanded c-btn c-btn__detail c-btn--homeblog" href="<?php echo get_permalink(get_page_by_path('blog')); ?>">Lees meer blogposts</a>
        </div>

        <div class="media-object-section">
            <img src="<?php echo get_the_post_thumbnail_url() ?>" alt="blog" />
        </div>
    </div>
</div>