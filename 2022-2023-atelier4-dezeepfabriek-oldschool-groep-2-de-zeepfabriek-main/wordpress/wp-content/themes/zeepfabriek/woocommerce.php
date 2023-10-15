<?php get_header(); ?>
<?php

if (is_shop() && !is_product()) { ?>
    <?php
    woocommerce_mini_cart();
    ?>
    <div class="grid-container c-shopoverzicht" style="margin-top: 2rem;">
        <section>
            <h1 class="text-center">Onze selectie</h1>
            <p class="text-center">
                In onze winkel vindt je een wijde selectie aan <strong>zepen, douche-créme's, haarproducten en meer</strong>.
                <br />
                Bekijk hieronder de uitgelichte selectie van een categorie of druk op een knop en ga naar de categorie pagina waar je een grotere en meer uitgebreide selectie kan vinden.
            </p>
            <ul class="menu c-shopoverzicht__menu">
                <?php

                $hide_empty = true;
                $cat_args = array(
                    'hide_empty' => $hide_empty,
                );
                $product_categories = get_terms('product_cat', $cat_args);

                if (!empty($product_categories)) {
                    foreach ($product_categories as $category) {

                ?>

                        <li><a href="#<?php echo $category->name ?>"><?php echo $category->name ?></a></li>

                <?php

                    }
                }

                ?>
                <!-- <li><a href="#packages">Pakketjes</a></li>
                <li><a href="#solids">Solids</a></li>
                <li><a href="#soaps">Zepen</a></li>
                <li><a href="#bodyFace">Body & face</a></li>
                <li><a href="#bathShowerHair">Bad, douche & haar</a></li>
                <li><a href="#takeCareOfSkin">Zorg voor m'n huid</a></li> -->
            </ul>
        </section>

        <?php if (have_posts()) : ?>
            <?php

            if (!empty($product_categories)) {
                foreach ($product_categories as $category) {

            ?>
                    <section class="c-shopoverzicht__category" id="<?php echo $category->name ?>">
                        <h2 class="text-center"><?php echo $category->name ?></h2>
                        <p class="text-center"><?php echo $category->description ?></p>
                        <div class="glide c-shopoverzicht__carousel">
                            <div class="glide__track" data-glide-el="track">
                                <ul class="glide__slides">

                                    <?php

                                    $prod_args = array(
                                        'post_type'      => 'product',
                                        'posts_per_page' => 12,
                                        'product_cat'    => $category->name
                                    );
                                    $prod_loop = new WP_Query($prod_args);

                                    $i = 1;
                                    // have to rewrite this to use the woocommerce querries
                                    while ($prod_loop->have_posts()) : $prod_loop->the_post();
                                        global $product;
                                        $id = $product->get_id();
                                        // echo '<p>';
                                        // echo $i;
                                        // echo '</p>';


                                    ?>

                                        <li class="glide__slide" id="<?php echo $i ?>">

                                            <?php
                                            get_template_part('custom-card', '', array('product' => $product));
                                            ?>

                                        </li>

                                    <?php
                                        $i++;
                                    endwhile;
                                    ?>

                                </ul>
                            </div>
                            <div class="glide__arrows" data-glide-el="controls">
                                <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13.503" height="23.619" viewBox="0 0 13.503 23.619">
                                        <path id="Icon_ionic-ios-arrow-back--soaps" data-name="Icon ionic-ios-arrow-back" d="M15.321,18l8.937-8.93a1.688,1.688,0,0,0-2.391-2.384L11.742,16.8a1.685,1.685,0,0,0-.049,2.327L21.86,29.32a1.688,1.688,0,0,0,2.391-2.384Z" transform="translate(-11.251 -6.194)" />
                                    </svg>
                                </button>
                                <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13.503" height="23.616" viewBox="0 0 13.503 23.616">
                                        <path id="Icon_ionic-ios-arrow-forward--soaps" data-name="Icon ionic-ios-arrow-forward" d="M20.679,18,11.742,9.07a1.681,1.681,0,0,1,0-2.384,1.7,1.7,0,0,1,2.391,0L24.258,16.8a1.685,1.685,0,0,1,.049,2.327L14.14,29.32a1.688,1.688,0,0,1-2.391-2.384Z" transform="translate(-11.246 -6.196)" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="c-shopoverzicht__btncontainer">
                            <a href="../product-categorie/<?php echo $category->slug ?>" class="c-blogarticle__btn c-topbanner__text--btn button expanded c-btn c-btn__detail c-btn--webshop">
                                Alles van <?php echo $category->name ?>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 12.156 7.753">
                                    <path id="Icon_weather-direction-right--solids" data-name="Icon weather-direction-right" d="M11.928,17.232a.951.951,0,0,0,.276.684.811.811,0,0,0,.672.24h7.9l-1.236,1.3a.928.928,0,0,0,0,1.344.931.931,0,0,0,.7.276.851.851,0,0,0,.636-.324l2.94-2.892a.931.931,0,0,0,.276-.7,1,1,0,0,0-.288-.7L20.832,13.6a.806.806,0,0,0-.648-.276.922.922,0,0,0-.684.264.879.879,0,0,0-.276.672.932.932,0,0,0,.276.684l1.272,1.3H12.864a.925.925,0,0,0-.672.3A1.01,1.01,0,0,0,11.928,17.232Z" transform="translate(-11.928 -13.319)" />
                                </svg>
                            </a>
                        </div>
                    </section>
            <?php

                }
            }
            ?>

    </div>
<?php endif; ?>

<!-- displays product category page -->
<?php } elseif (is_product_category()) { ?>
    <div class="grid-container">
        <?php
        // gets the slug of the category to querry for products
        $category = get_queried_object();
        $category_slug = $category->slug;
        $thumbnail_id = get_term_meta($category->term_id, 'thumbnail_id', true);
        $image_url = wp_get_attachment_url($thumbnail_id);

        // echo '<p>';
        // echo $category;
        // echo '</p>';

        if ($image_url) {
        ?>
            <section>
                <div class="c-shopcategory__imgcontainer">
                    <img src="<?php echo $image_url ?>" alt="<?php echo $category_slug ?>" class="c-shopcategory__img" />
                </div>
            </section>
        <?php
        }
        ?>

        <div class="">
            <div class="small-12 large-12 grid-x c-shopcategory__dropdowncontainer grid-margin-x">
                <div class="cell small-12 medium-6 large-offset-3 large-auto grid-x">
                    <!-- dropdown items per pagina -->
                    <div class="cell auto c-shopcategory__dropdown c-shopcategory__dropdown--first">
                        <?php

                        $products_per_page_values = [6, 12, 24, 36, 48];
                        $default_posts_per_page = 12;

                        ?>

                        <form method="get">
                            <label for="per_page">Producten per pagina:</label>
                            <select name="per_page" method="get" onchange="this.form.submit()">
                                <?php

                                for ($i_optionArray_perPage = 0; $i_optionArray_perPage < sizeof($products_per_page_values); $i_optionArray_perPage++) {
                                    if ($products_per_page_values[$i_optionArray_perPage] === $default_posts_per_page) {

                                ?>
                                        <option value="<?php echo $products_per_page_values[$i_optionArray_perPage] ?>" <?php if (isset($_GET['per_page'])) {
                                                                                                                            if ($_GET['per_page'] == $products_per_page_values[$i_optionArray_perPage]) {
                                                                                                                                echo ' selected';
                                                                                                                            }
                                                                                                                        } else {
                                                                                                                            echo ' selected';
                                                                                                                        } ?>><?php echo $products_per_page_values[$i_optionArray_perPage] ?></option>
                                    <?php
                                    } else {
                                    ?>
                                        <option value="<?php echo $products_per_page_values[$i_optionArray_perPage] ?>" <?php if (isset($_GET['per_page'])) {
                                                                                                                            if ($_GET['per_page'] == $products_per_page_values[$i_optionArray_perPage]) {
                                                                                                                                echo ' selected';
                                                                                                                            }
                                                                                                                        } ?>><?php echo $products_per_page_values[$i_optionArray_perPage] ?></option>
                                <?php
                                    }
                                }

                                ?>
                            </select>
                            <?php wc_query_string_form_fields(null, array('per_page', 'submit')); ?>
                        </form>
                    </div>
                </div>
                <div class="cell small-12 medium-6 large-auto grid-x">
                    <!-- dropdown order by -->
                    <div class="cell auto c-shopcategory__dropdown c-shopcategory__dropdown--second">
                        <form method="get">
                            <label for="order_by">sorteer op:</label>
                            <select name="order_by" method="get" onchange="this.form.submit()">
                                <?php
                                $default_order_by_value = 'name_A-Z';

                                $ordery_by_options = [
                                    array(
                                        'name' => 'Naam : A - Z',
                                        'value' => 'name_A-Z'
                                    ),
                                    array(
                                        'name' => 'Naam : Z - A',
                                        'value' => 'name_Z-A'
                                    ),
                                    array(
                                        'name' => 'Prijs : hoog - laag',
                                        'value' => 'price_H-L'
                                    ),
                                    array(
                                        'name' => 'Prijs : laag - hoog',
                                        'value' => 'price_L-H'
                                    ),
                                    array(
                                        'name' => 'populariteit',
                                        'value' => 'popularity'
                                    ),
                                ];

                                for ($i_optionArray_orderBy = 0; $i_optionArray_orderBy < sizeof($ordery_by_options); $i_optionArray_orderBy++) {

                                    if ($ordery_by_options[$i_optionArray_orderBy]['value'] === $default_order_by_value) {
                                ?>
                                        <option value="<?php echo $ordery_by_options[$i_optionArray_orderBy]['value'] ?>" <?php if (isset($_GET['order_by'])) {
                                                                                                                                if ($_GET['order_by'] == $ordery_by_options[$i_optionArray_orderBy]['value']) {
                                                                                                                                    echo ' selected';
                                                                                                                                }
                                                                                                                            } else {
                                                                                                                                echo ' selected';
                                                                                                                            } ?>><?php echo $ordery_by_options[$i_optionArray_orderBy]['name'] ?></option>
                                    <?php
                                    } else {
                                    ?>
                                        <option value="<?php echo $ordery_by_options[$i_optionArray_orderBy]['value'] ?>" <?php if (isset($_GET['order_by'])) {
                                                                                                                                if ($_GET['order_by'] == $ordery_by_options[$i_optionArray_orderBy]['value']) {
                                                                                                                                    echo ' selected';
                                                                                                                                }
                                                                                                                            }  ?>><?php echo $ordery_by_options[$i_optionArray_orderBy]['name'] ?></option>
                                <?php
                                    }
                                }

                                ?>
                            </select>
                            <?php wc_query_string_form_fields(null, array('order_by', 'submit')); ?>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid-x grid-margin-x">
            <ul class="vertical menu accordion-menu cell small-12 medium-6 large-3" data-accordion-menu>
                <li class="c-shopcategory__accordion">
                    <a href="#">Subcategorie</a>
                    <ul class="menu vertical nested">
                        <li class="c-shopcategory__checkbox">
                            <input type="checkbox" name="bad" id="bad" class="" />
                            <label for="bad">
                                <span></span>
                                Bad
                                <ins>
                                    <i>Bad</i>
                                </ins>
                            </label>
                        </li>
                        <li class="c-shopcategory__checkbox">
                            <input type="checkbox" name="haar" id="haar" class="" />
                            <label for="haar">
                                <span></span>
                                Haar
                                <ins>
                                    <i>Haar</i>
                                </ins>
                            </label>
                        </li>
                        <li class="c-shopcategory__checkbox">
                            <input type="checkbox" name="douche" id="douche" class="" />
                            <label for="douche">
                                <span></span>
                                Douche
                                <ins>
                                    <i>Douche</i>
                                </ins>
                            </label>
                        </li>
                        <li class="c-shopcategory__checkbox">
                            <input type="checkbox" name="specials" id="specials" class="" />
                            <label for="specials">
                                <span></span>
                                Specials
                                <ins>
                                    <i>Specials</i>
                                </ins>
                            </label>
                        </li>
                    </ul>
                </li>
                <li class="c-shopcategory__accordion">
                    <a href="#">Te gebruiken bij</a>
                    <ul class="menu vertical nested">
                        <li class="c-shopcategory__checkbox">
                            <input type="checkbox" name="acne" id="acne" class="" />
                            <label for="acne">
                                <span></span>
                                Acné
                                <ins>
                                    <i>Acné</i>
                                </ins>
                            </label>
                        </li>
                        <li class="c-shopcategory__checkbox">
                            <input type="checkbox" name="eczema" id="eczema" class="" />
                            <label for="eczema">
                                <span></span>
                                Eczema
                                <ins>
                                    <i>Eczema</i>
                                </ins>
                            </label>
                        </li>
                        <li class="c-shopcategory__checkbox">
                            <input type="checkbox" name="huiduitslag" id="huiduitslag" class="" />
                            <label for="huiduitslag">
                                <span></span>
                                Huiduitslag
                                <ins>
                                    <i>Huiduitslag</i>
                                </ins>
                            </label>
                        </li>
                        <li class="c-shopcategory__checkbox">
                            <input type="checkbox" name="hyperpigmentatie" id="hyperpigmentatie" class="" />
                            <label for="hyperpigmentatie">
                                <span></span>
                                Hyperpigmentatie
                                <ins>
                                    <i>Hyperpigmentatie</i>
                                </ins>
                            </label>
                        </li>
                    </ul>
                </li>
            </ul>

            <div class="grid-x grid-margin-x cell small-12 medium-12 large-9">

                <?php

                if (isset($_GET['per_page'])) {
                    $posts_per_page = $_GET['per_page'];
                } else {
                    // default posts per page is declared where the products per page selector is made
                    $posts_per_page = $default_posts_per_page;
                }

                if (isset($_GET['order_by'])) {
                    $order_by_value = $_GET['order_by'];
                } else {
                    // default is name A-Z
                    $order_by_value = $default_order_by_value;
                }

                switch ($order_by_value) {
                    case "name_A-Z":
                        $orderby = 'title';
                        $meta_key = '';
                        $order = 'asc';

                        break;
                    case "name_Z-A":
                        $orderby = 'title';
                        $meta_key = '';
                        $order = 'desc';

                        break;
                    case "price_L-H":
                        $orderby = 'meta_value_num';
                        $meta_key = '_price';
                        $order = 'asc';

                        break;
                    case "price_H-L":
                        $orderby = 'meta_value_num';
                        $meta_key = '_price';
                        $order = 'desc';

                        break;
                    case "popularity":
                        $orderby = 'meta_value_num';
                        $meta_key = '_wc_average_rating ';
                        $order = 'desc';

                        break;
                }

                $prod_args = array(
                    'post_type'      => 'product',
                    'posts_per_page' => $posts_per_page,
                    'product_cat'    => $category_slug,
                    'orderby'    => $orderby,
                    'meta_key' => $meta_key,
                    'order'      => $order
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

                    <div class="cell small-12 medium-6 large-4">
                        <?php
                        get_template_part('custom-card', '', array('product' => $product));
                        ?>
                    </div>

                <?php
                endwhile;
                ?>

            </div>
        </div>

        <?php

        ?>
                <div aria-label="Pagination">
  <ul class="pagination text-center c-pagination">
    <li class="pagination-previous disabled">Previous</li>
    <li class="current c-pagination__current"><span class="show-for-sr">You're on page</span> 1</li>
    <li><a href="#" aria-label="Page 2">2</a></li>
    <li><a href="#" aria-label="Page 3">3</a></li>
    <li class="pagination-next"><a href="#" aria-label="Next page">Next</a></li>
  </ul>
<div>
    </div>
<?php } else { ?>

    <?php
    // Display custom card for each product
    while (have_posts()) : the_post();
        global $product;
        get_template_part('product-detail', '', array('product' => $product));
    endwhile;
    ?>

<?php } ?>

<?php get_footer() ?>