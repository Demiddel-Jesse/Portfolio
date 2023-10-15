<?php /* Template Name: Blog */ ?>
<?php get_header(); ?>

<section class="grid-container c-blog">
    <section class="grid-y">
        <div class="grid-x">
            <div class="small-12 medium-10 medium-offset-1">
                <section class="c-breadcrumbs">
                    <nav aria-label="You are here:" role="navigation">
                        <ul class="breadcrumbs">
                            <li><a href="#">Home</a></li>
                            <li class="disabled">Blog overzicht</li>
                        </ul>
                    </nav>
                </section>
                <div class="c-blog__imgcontainer">
                    <img src="<?php echo get_template_directory_uri()."/img/blog.jpg"?>" alt="blogHeader" class="c-blog__img" />
                </div>
                <!-- blog posts -->
                <div class="grid-x grid-margin-x">
                    <!-- blog post -->
                    <?php
                    $arg = array(
                        'post_type' => array('blog'),
                        'nopaging' => false,
                        'posts_per_page' => 4,
                        'order' => 'ASC',
                        'orderby' => 'date'
                    );
                    $query = new WP_Query($arg);
                    if ($query->have_posts()) :
                        while ($query->have_posts()) : $query->the_post();
                        // $catVanDePost = get_the_category();
                    
                        get_template_part('template-parts/post/content', 'blog');
                    
                        endwhile;
                    endif;
                    wp_reset_query();
                    ?>                   
                    
                </div>
            </div>
        </div>
    </section>
</section>

<?php get_footer( )?>