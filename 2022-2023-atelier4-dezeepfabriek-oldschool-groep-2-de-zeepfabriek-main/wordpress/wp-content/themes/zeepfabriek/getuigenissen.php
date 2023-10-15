<?php /* Template Name: Getuigenissen */ ?>
<?php get_header(); ?>

<div class="grid-container">
    <section class="c-breadcrumbs">
        <nav aria-label="You are here:" role="navigation">
            <ul class="breadcrumbs">
                <li><a href="#">Home</a></li>
                <li class="disabled">Getuigenissen</li>
            </ul>
        </nav>
    </section>
    <section class="c-reviews">
        <div class="grid-x c-reviews__header">
            <div class="cell small-8">
                <h1>Klanten Getuigenissen</h1>
                <div class="c-productcontent__stars">
                    <span class="c-productcontent__stars">4.1</span>
                    <img src="<?php echo get_template_directory_uri()."/img/icons/star-fill.svg"?>" class="c-productcontent__stars--star" alt="star" />
                    <img src="<?php echo get_template_directory_uri()."/img/icons/star-fill.svg"?>" class="c-productcontent__stars--star" alt="star" />
                    <img src="<?php echo get_template_directory_uri()."/img/icons/star-fill.svg"?>" class="c-productcontent__stars--star" alt="star" />
                    <img src="<?php echo get_template_directory_uri()."/img/icons/star-fill.svg"?>" class="c-productcontent__stars--star" alt="star" />
                    <img src="<?php echo get_template_directory_uri()."/img/icons/star.svg"?>" class="c-productcontent__stars--star" alt="star" />
                    
                </div>
            </div> 
        </div>
        <div>
            <?php echo the_content() ?>
        </div>
    </section>
</div>

<?php get_footer(); ?>