<?php

// function print_pre($arr)
// {
//   echo '<pre>';
//   print_r($arr);
//   echo '</pre>';
// }

function journey_JSCSS()
{
  $pathTheme = get_template_directory_uri();
  wp_enqueue_style("journeyCSS", "$pathTheme/css/styles.css");
  wp_enqueue_script("journeyJS", "$pathTheme/js/main.js");
}

function cl_registreer_menus()
{
  register_nav_menus(array("main-menu" => "hoofdmenu", "icon-menu" => "iconmenu", "footer-menu" => "footermenu", "klant-menu" => "klantmenu"));
}

function ih_customdashboard_style()
{
  echo '<style>
  .wrap{
    color:black !important;
  }
  .wp-core-ui .button-primary{
    background-color: #90c7d3;
    border: none;
    color:black;
    font-weight: 400;
  }
  .wp-core-ui .button-primary:hover{
    background-color: #89b3bf;
    
  }
  body, td, textarea, input, select {
    font-family: "Montserrat", sans-serif;
    color: black;
    //background-color: #f9f5f5;
  } 
  textarea:focus,input:focus{
    border: 1px solid #90c7d3 !important;
    border-color: #90c7d3;
  }
  .button .button-primary {
    background: hotpink;
  }
  #adminmenu, #adminmenu .wp-submenu, #adminmenuback, #adminmenuwrap {
    background-color: #272525;
  }
  .wp-menu-name, .collapse-button-label {
    color: #F9F5F5;
    font-weight: 400;
  }
  #adminmenu .wp-has-current-submenu .wp-submenu, #adminmenu .wp-has-current-submenu .wp-submenu.sub-open, #adminmenu .wp-has-current-submenu.opensub .wp-submenu, #adminmenu a.wp-has-current-submenu:focus+.wp-submenu, .no-js li.wp-has-current-submenu:hover .wp-submenu {
    background-color: #89b3bf;
    color: black;
  }

  #adminmenu .wp-has-current-submenu .wp-submenu .wp-submenu-head, #adminmenu .wp-menu-arrow, #adminmenu .wp-menu-arrow div, #adminmenu li.current a.menu-top, #adminmenu li.wp-has-current-submenu a.wp-has-current-submenu {
    background: #89b3bf;
  }

  #adminmenu .wp-submenu li a:hover {
      color: #90c7d3;
  }

  #adminmenu .wp-has-submenu a .wp-menu-name:hover {
      color: #90c7d3;
  }


  #wpadminbar {background: #272525;}
  a {color: black; font-weight: 600; }
  a:hover {color: #89b3bf; font-weight: 600;}

  .alternate, .striped>tbody>:nth-child(odd), ul.striped>:nth-child(odd) {
    background: rgb(176, 210, 220, .5);
  }

  .wrap .add-new-h2, .wrap .add-new-h2:hover, .wrap .page-title-action, .wrap .page-title-action:hover {
    border: 1px solid #90c7d3;
    background: #90c7d3;
    color: #F9F5F5;
  }

  
  </style>';
}

function ih_add_woocommerce_support()
{
  add_theme_support('woocommerce', array(
    'thumbnail_image_width' => 150,
    'single_image_width'    => 300,

    'product_grid'          => array(
      'default_rows'    => 3,
      'min_rows'        => 2,
      'max_rows'        => 8,
      'default_columns' => 4,
      'min_columns'     => 2,
      'max_columns'     => 5,
    ),
  ));
}

function ih_customize_register($wp_customize)
{
  /* SETTINGS */
  $wp_customize->add_setting('setting-txt-header-title', array(
    'default' => 'Lorem ipsum'
  ));

  $wp_customize->add_setting('setting-txt-header-desc', array(
    'default' => 'Lorem ipsum dolor sit'
  ));

  $wp_customize->add_setting('setting-txt-winkels-title', array(
    'default' => 'Lorem ipsum dolor'
  ));

  $wp_customize->add_setting('setting-txt-winkels-desc', array(
    'default' => 'Lorem ipsum dolor sit'
  ));

  /* CONTROLS */
  $wp_customize->add_control('setting-txt-header-title', array(
    'label' => 'Show the intro text',
    'type' => 'textarea',
    'section' => 'section-id-zeepfabriek-headertitle-settings'
  ));

  $wp_customize->add_control('setting-txt-header-desc', array(
    'label' => 'Show the name text',
    'type' => 'textarea',
    'section' => 'section-id-zeepfabriek-headerdesc-settings'
  ));

  $wp_customize->add_control('setting-txt-winkels-title', array(
    'label' => 'Show the name text',
    'type' => 'textarea',
    'section' => 'section-id-zeepfabriek-winkelstitle-settings'
  ));

  $wp_customize->add_control('setting-txt-winkels-desc', array(
    'label' => 'Show the name text',
    'type' => 'textarea',
    'section' => 'section-id-zeepfabriek-winkelsdesc-settings'
  ));

  /* SECTION */
  $wp_customize->add_section('section-id-zeepfabriek-headertitle-settings', array(
    'title' =>  'Headertekst - Titel ',
    'description' =>  'Stel de titel in voor de header',
    'active_callback' => 'is_front_page', //wanneer moet deze setting worden getoond
  ));

  $wp_customize->add_section('section-id-zeepfabriek-headerdesc-settings', array(
    'title' =>  'Headertekst - beschrijving',
    'description' =>  'Stel de beschrijving in voor de header',
    'active_callback' => 'is_front_page', //wanneer moet deze setting worden getoond
  ));

  $wp_customize->add_section('section-id-zeepfabriek-winkelstitle-settings', array(
    'title' =>  'Winkelstekst - titel',
    'description' =>  'Stel de titel in voor de winkels van de homepagina.',
    'active_callback' => 'is_front_page', //wanneer moet deze setting worden getoond
  ));

  $wp_customize->add_section('section-id-zeepfabriek-winkelsdesc-settings', array(
    'title' =>  'Winkelstekst - beschrijving',
    'description' =>  'Stel de beschrijving in voor de winkels van de homepagina.',
    'active_callback' => 'is_front_page', //wanneer moet deze setting worden getoond
  ));
}

// Register Custom Post Type blog
function ih_blog()
{

  $labels = array(
    'name'                  => 'blog',
    'singular_name'         => 'blog',
    'menu_name'             => 'blog',
    'name_admin_bar'        => 'blog',
    'archives'              => 'blog archief',
    'attributes'            => 'blog Attributes',
    'parent_item_colon'     => 'Parent Item:',
    'all_items'             => 'All Items',
    'add_new_item'          => 'Voeg nieuwe blog toe',
    'add_new'               => 'Nieuw blogbericht',
    'new_item'              => 'Nieuw blogbericht',
    'edit_item'             => 'Wijzig blogbericht',
    'update_item'           => 'Update blogbericht',
    'view_item'             => 'Toon blog',
    'view_items'            => 'Toon blog',
    'search_items'          => 'Doorzoek blog',
    'not_found'             => 'Not found',
    'not_found_in_trash'    => 'Not found in Trash',
    'featured_image'        => 'Featured Image',
    'set_featured_image'    => 'Set featured image',
    'remove_featured_image' => 'Remove featured image',
    'use_featured_image'    => 'Use as featured image',
    'insert_into_item'      => 'Insert into item',
    'uploaded_to_this_item' => 'Uploaded to this item',
    'items_list'            => 'Items list',
    'items_list_navigation' => 'blog list navigation',
    'filter_items_list'     => 'Filter blog list',
  );
  $args = array(
    'label'                 => 'blog',
    'description'           => 'blog berichten',
    'labels'                => $labels,
    'supports'              => array('title', 'editor', 'thumbnail', 'custom-fields'),
    'taxonomies'            => array('category', 'post_tag'),
    'hierarchical'          => false,
    'public'                => true,
    'show_ui'               => true,
    'show_in_menu'          => true,
    'menu_position'         => 5,
    'menu_icon'             => 'dashicons-format-status',
    'show_in_admin_bar'     => true,
    'show_in_nav_menus'     => true,
    'can_export'            => true,
    'has_archive'           => true,
    'exclude_from_search'   => false,
    'publicly_queryable'    => true,
    'capability_type'       => 'page',
    'show_in_rest'          => true,
  );
  register_post_type('blog', $args);
}

function ih_winkels()
{

  $labels = array(
    'name'                  => 'Winkels',
    'singular_name'         => 'Winkels',
    'menu_name'             => 'Winkels',
    'name_admin_bar'        => 'Winkels',
    'archives'              => 'Winkels archief',
    'attributes'            => 'Winkels Attributes',
    'parent_item_colon'     => 'Parent Item:',
    'all_items'             => 'All Items',
    'add_new_item'          => 'Voeg nieuwe Winkels toe',
    'add_new'               => 'Nieuw Winkelbericht',
    'new_item'              => 'Nieuw Winkelbericht',
    'edit_item'             => 'Wijzig Winkelbericht',
    'update_item'           => 'Update Winkelbericht',
    'view_item'             => 'Toon Winkels',
    'view_items'            => 'Toon Winkels',
    'search_items'          => 'Doorzoek Winkels',
    'not_found'             => 'Not found',
    'not_found_in_trash'    => 'Not found in Trash',
    'featured_image'        => 'Featured Image',
    'set_featured_image'    => 'Set featured image',
    'remove_featured_image' => 'Remove featured image',
    'use_featured_image'    => 'Use as featured image',
    'insert_into_item'      => 'Insert into item',
    'uploaded_to_this_item' => 'Uploaded to this item',
    'items_list'            => 'Items list',
    'items_list_navigation' => 'Winkels list navigation',
    'filter_items_list'     => 'Filter Winkels list',
  );
  $args = array(
    'label'                 => 'Winkels',
    'description'           => 'Winkels berichten',
    'labels'                => $labels,
    'supports'              => array('title', 'editor', 'thumbnail', 'custom-fields'),
    'taxonomies'            => array('category', 'post_tag'),
    'hierarchical'          => false,
    'public'                => true,
    'show_ui'               => true,
    'show_in_menu'          => true,
    'menu_position'         => 5,
    'menu_icon'             => 'dashicons-format-status',
    'show_in_admin_bar'     => true,
    'show_in_nav_menus'     => true,
    'can_export'            => true,
    'has_archive'           => true,
    'exclude_from_search'   => false,
    'publicly_queryable'    => true,
    'capability_type'       => 'page',
    'show_in_rest'          => true,
  );
  register_post_type('Winkels', $args);
}

function ih_my_login_logo()
{ ?>
  <style type="text/css">
    #login h1 a,
    .login h1 a {
      background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/img/icons/logo.svg);
      height: 65px;
      width: 320px;
      background-size: 320px 65px;
      background-repeat: no-repeat;
      padding-bottom: 30px;
    }

    #login form#loginform input {
      box-sizing: border-box;
      padding: 0.5rem;
      border: 1px solid #cacaca;
      border-radius: 0;
      background-color: #fefefe;
      box-shadow: inset 0 1px 2px rgb(10 10 10 / 10%);
      font-family: inherit;
      font-size: 1rem;
      font-weight: normal;
      line-height: 1.5;
      color: #0a0a0a;
      transition: box-shadow .5s, border-color .25s ease-in-out;
    }

    #login form#loginform p.submit input#wp-submit {
      width: 40%;
      border: 2px solid #90c7d3;
      border-radius: 0.5rem;
    }

    #login form#loginform p.submit input#wp-submit:hover {
      background-color: #90c7d3;
    }
  </style>
<?php }

// function ih_my_login_stylesheet() {
//   wp_enqueue_style( 'custom-login', get_stylesheet_directory_uri() . '/login.css' );
// }

function ih_my_product_detail()
{
  global $product;

  // Load custom card template for current product
  get_template_part('product-detail', '', array('product' => $product));
}

function ih_custom_card()
{
  global $product;

  // Load custom card template for current product
  get_template_part('custom-card', '', array('product' => $product));
}

function ih_add_custom_blog_box()
{
  add_meta_box(
    'ih_blog_box_id', // Unique ID
    'Info blog', // Box title
    'ih_custom_box_blog_html', // Content callback, must be of type callable
    'blog' // Post type
  );
}

function ih_custom_box_blog_html($post)
{

  $value_functie = get_post_meta($post->ID, '_blog_functie', true);

  //optioneel kan deze callback functie de $post variabele gebruiken als parameter
  echo "<h1>Extra info over blogbericht:</h1>";
  echo "<div class='c-form-row'>";
  echo "<div class='c-form-row__lbl'>";
  echo "Functie auteur blogbericht: ";
  echo "</div>";
  echo "<div class='c-form-row__ctrl'>";
  echo "<input type='text' id='blog_functie' name='blog_functie' value='" . $value_functie . "'>";
  echo "</div>";
  echo "</div>";
}

function ih_save_postdata($post_id)
{
  $naam_post_type = get_post_type($post_id);
  if ($naam_post_type) {

    //blog
    if ($naam_post_type == "blog") {
      if (array_key_exists('blog_functie', $_POST)) {
        update_post_meta(
          $post_id,
          '_blog_functie',
          $_POST['blog_functie']
        );
      }
    }

    //winkels
    if ($naam_post_type == "winkels") {
      if (array_key_exists('winkels_tel', $_POST)) {
        update_post_meta(
          $post_id,
          '_winkels_tel',
          $_POST['winkels_tel']
        );
      }
      if (array_key_exists('winkels_weekdagen', $_POST)) {
        update_post_meta(
          $post_id,
          '_winkels_weekdagen',
          $_POST['winkels_weekdagen']
        );
      }
      if (array_key_exists('winkels_zaterdag', $_POST)) {
        update_post_meta(
          $post_id,
          '_winkels_zaterdag',
          $_POST['winkels_zaterdag']
        );
      }
      if (array_key_exists('winkels_zondag', $_POST)) {
        update_post_meta(
          $post_id,
          '_winkels_zondag',
          $_POST['winkels_zondag']
        );
      }
    }
  }
}

function ih_custom_box_winkels_html($post)
{

  $value_tel = get_post_meta($post->ID, '_winkels_tel', true);
  $value_weekdagen = get_post_meta($post->ID, '_winkels_weekdagen', true);
  $value_zaterdag = get_post_meta($post->ID, '_winkels_zaterdag', true);
  $value_zondag = get_post_meta($post->ID, '_winkels_zondag', true);

  //optioneel kan deze callback functie de $post variabele gebruiken als parameter
  echo "<h1>Extra info over de winkel</h1>";
  echo "<div class='c-form-row'>";
  echo "<div class='c-form-row__lbl'>";
  echo "Telefoonnummer winkel: ";
  echo "</div>";
  echo "<div class='c-form-row__ctrl'>";
  echo "<input type='text' pattern='^\d{9,10}$' id='winkels_tel' name='winkels_tel' value='" . $value_tel . "'>";
  echo "</div>";
  echo "</div>";
  echo "<div class='c-form-row'>";
  echo "<div class='c-form-row__lbl'>";
  echo "Openingsuren weekdagen: ";
  echo "</div>";
  echo "<div class='c-form-row__ctrl'>";
  echo "<input type='text' pattern='^\d{9,10}$' id='winkels_weekdagen' name='winkels_weekdagen' value='" . $value_weekdagen . "'>";
  echo "</div>";
  echo "</div>";
  echo "<div class='c-form-row'>";
  echo "<div class='c-form-row__lbl'>";
  echo "Openingsuren op zaterdag: ";
  echo "</div>";
  echo "<div class='c-form-row__ctrl'>";
  echo "<input type='text' id='winkels_zaterdag' name='winkels_zaterdag' value='" . $value_zaterdag . "'>";
  echo "</div>";
  echo "</div>";
  echo "<div class='c-form-row'>";
  echo "<div class='c-form-row__lbl'>";
  echo "Openingsuren op zondag: ";
  echo "</div>";
  echo "<div class='c-form-row__ctrl'>";
  echo "<input type='text' id='winkels_zondag' name='winkels_zondag' value='" . $value_zondag . "'>";
  echo "</div>";
  echo "</div>";
}

function ih_add_custom_winkels_box(){
  add_meta_box(
    'ih_winkels_box_id', // Unique ID
    'Info winkels', // Box title
    'ih_custom_box_winkels_html', // Content callback, must be of type callable
    'winkels' // Post type
  );
}

function wpse_nav_menu_css_class(array $classes, $item, $args, $depth)
{
  if (in_array('c-nav__item', $classes)) {
    $classes[] = 'is-active';
  }
  return $classes;
}
add_filter('nav_menu_css_class', 'wpse_nav_menu_css_class', 10, 4);

//save post data
add_action('save_post', 'ih_save_postdata');

// add_action( 'login_enqueue_scripts', 'ih_my_login_stylesheet' );
add_action('login_enqueue_scripts', 'ih_my_login_logo');

//header tekst aanpassen via customizer
add_action('customize_register', 'ih_customize_register');

//woocommerce support
add_action('after_setup_theme', 'ih_add_woocommerce_support');

//dashboard stylen
add_action('admin_head', 'ih_customdashboard_style');

//laad css/js
add_action("wp_enqueue_scripts", "journey_JSCSS");

add_filter('woocommerce_widget_cart_is_hidden', 'hide_mini_cart_when_empty', 10, 2);

// Display custom card for each product
add_action('woocommerce_before_add_to_cart_button', 'ih_custom_card');

add_action('woocommerce_before_add_to_cart_button', 'ih_my_product_detail');

//add blog cpt
add_action('init', 'ih_blog', 0);
add_action('init', 'ih_winkels', 0);

//add meta boxes
//blog cpt
add_action('add_meta_boxes', 'ih_add_custom_blog_box');

add_action('add_meta_boxes', 'ih_add_custom_winkels_box');

add_action("init", "cl_registreer_menus");

add_theme_support('post-thumbnails');

add_action( 'woocommerce_after_template_part', 'custom_woocommerce_pagination' );

function custom_woocommerce_pagination() {
    if ( is_shop() || is_product_taxonomy() || is_product_category() || is_product_tag() ) {
        remove_action( 'woocommerce_after_shop_loop', 'woocommerce_pagination', 10 );
        add_action( 'woocommerce_after_shop_loop', 'woocommerce_pagination', 10 );
    }
}
add_filter( 'woocommerce_pagination_args', 'custom_woocommerce_pagination_args' );

function custom_woocommerce_pagination_args( $args ) {
    $args['limit'] = 6; // Change the number of products per page
    return $args;
}
function custom_shop_per_page($per_page)
{
  if (isset($_GET['per_page'])) {
    $per_page = $_GET['per_page'];
  }
  return $per_page;
}

function vince_check_active_menu($menu_item)
{
  $actual_link = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
  if ($actual_link == $menu_item->url) {
    return 'is-active';
  }
  return '';
}

function get_product_age($product_id)
{
  // Get the publish date of the product
  $publish_date = get_the_time('Y-m-d', $product_id);
  // Get the current date
  $current_date = date('Y-m-d');
  // Calculate the difference between the two dates
  $diff = date_diff(date_create($publish_date), date_create($current_date));
  // Return the difference in days
  return $diff->format('%a');
}
?>