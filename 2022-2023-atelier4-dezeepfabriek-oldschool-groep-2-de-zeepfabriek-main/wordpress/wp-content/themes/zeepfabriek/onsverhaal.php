<?php /* Template Name: Verhaal */ ?>
<?php get_header(); ?>

<section class=" grid-container">
    <section class="c-breadcrumbs">
        <nav aria-label="You are here:" role="navigation">
            <ul class="breadcrumbs">
                <li><a href="#">Home</a></li>
                <li class="disabled">Ons verhaal</li>
            </ul>
        </nav>
    </section>
    <section class="c-overons grid-x">
        <div class="cell small-12 ">
            <?php echo get_the_content() ?>
            
        </div>
    </section>
</section>

<?php get_footer(); ?>