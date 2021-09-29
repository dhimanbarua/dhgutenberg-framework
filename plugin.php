<?php
/**
 * 
 * Plugin Name: First-Guten-Block
 * Plugin URI: https://dhgutenberg.com/first-guten-block
 * Description: This is our first gutenberg blocks plugin for learning basis
 * Author: DHGutenberg
 * Author URI: https://dhgutenberg.com
 * 
 */

 if( ! defined( 'ABSPATH')) {
     exit;
 }

 function dh_gutenberg_blocks_categories( $categories, $post ){
     return array_merge(
        $categories,
        array(
            array(
                'slug'  => 'dh-gutenberg',
                'title' => __('Dh-Gutenberg', 'dh-gutenberg'),
                'icon'  => 'wordpress',
            )
        )
     );
 }
 add_filter('block_categories', 'dh_gutenberg_blocks_categories', 10, 2);

 function dhguten_blocks_register_block_type($block, $options=array()) {
    register_block_type('dh-gutenberg/' . $block,
         array_merge(array(
            'editor_script' => 'dh-gutenberg-editor-script',
            'editor_style'  => 'dh-gutenberg-editor-style',
            'script'        => 'dh-gutenberg-script',
            'style'         => 'dh-gutenberg-style'
        ), $options));
 }

 function dhguten_blocks_register() {

    wp_register_script('dh-gutenberg-editor-script',plugins_url('dist/editor.js', __FILE__), array(
        'wp-blocks',
        'wp-i18n',
        'wp-element',
        'wp-editor',
        'wp-components'
    ));

    wp_register_script('dh-gutenberg-script',plugins_url('dist/script.js', __FILE__), array('jquery'));

    wp_register_style('dh-gutenberg-editor-style',plugins_url('dist/editor.css', __FILE__), array('wp-edit-blocks'));

    wp_register_style('dh-gutenberg-style',plugins_url('dist/style.css', __FILE__), array());

    dhguten_blocks_register_block_type('firstblock');
    dhguten_blocks_register_block_type('secondblock', array());
    dhguten_blocks_register_block_type('team-member', array());
     
 }

 add_action('init', 'dhguten_blocks_register');