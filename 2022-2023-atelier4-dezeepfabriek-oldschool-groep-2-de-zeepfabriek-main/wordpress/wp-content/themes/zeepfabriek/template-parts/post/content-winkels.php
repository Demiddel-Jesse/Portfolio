<div class="cell large-3">
    <div class="card c-card">
        <div class="c-card__side c-card__side--front">
        <div class="card-image c-card__img">
            <img src="<?php echo get_the_post_thumbnail_url() ?>" alt="locatie1" />
            <div class="card-overlay d-flex align-middle c-card__overlay">
            <div class="card-section text-center c-card__section c-card__section--front">
                <h2><?php echo get_the_title() ?></h2>
            </div>
            </div>
        </div>
        </div>
        <div class="c-card__side c-card__side--back">
        <div class="card-image c-card__img">
            <img src="<?php echo get_the_post_thumbnail_url() ?>" alt="<?php echo get_the_title() ?>" />
            <div class="card-overlay d-flex align-middle c-card__overlay">
            <div class="card-section text-center c-card__section c-card__section--front">
                <h4><?php echo the_content() ?></h4>
            </div>
            </div>
        </div>
        </div>
    </div>
</div>